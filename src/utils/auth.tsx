import cookie from 'js-cookie';
import nextCookie from 'next-cookies';
import { NextPageContext } from 'next';
import { redirectTo } from '@utils';
import { routes } from '@config';
import { useEffect } from 'react';

export const login = ({ token }) => cookie.set('token', token, { expires: 1 });

export const auth = (ctx: NextPageContext) => {
    const { token } = nextCookie(ctx);

    if (!token) {
        if (typeof window === 'undefined') {
            ctx.res.writeHead(302, { Location: routes.login });
            ctx.res.end();
        }
    }

    return token;
};

export const logout = () => {
    cookie.remove('token');
    window.localStorage.setItem('logout', Date.now() + '');
    redirectTo(routes.login);
};

export const withAuth = (ComponentToWrap: any) => {
    const Wrapper = (props: any) => {
        const syncLogout = (event: { key: string }) => {
            if (event.key === 'logout') {
                console.log('logged out from storage');
                redirectTo(routes.login);
            }
        };

        useEffect(() => {
            window.addEventListener('storage', syncLogout);

            return () => {
                window.removeEventListener('storage', syncLogout);
                window.localStorage.removeItem('logout');
            };
        }, []);

        return <ComponentToWrap {...props} />;
    };

    Wrapper.getInitialProps = async (ctx: NextPageContext) => {
        const token = auth(ctx);
        const componentProps =
            ComponentToWrap.getInitialProps &&
            (await ComponentToWrap.getInitialProps(ctx));

        return { ...componentProps, token };
    };

    return Wrapper;
};
