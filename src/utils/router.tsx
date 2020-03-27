import Router from 'next/router';

export const redirectTo = (path: string) => Router.push(path);
