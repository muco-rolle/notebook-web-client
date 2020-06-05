import styled from "styled-components";
import { Layout, Avatar, Menu } from "antd";
import { NextLink } from "components";
import { routes } from "config";
import {
    BookOutlined,
    FireOutlined,
    StarOutlined,
    UploadOutlined,
    SettingOutlined,
    LogoutOutlined,
    UserOutlined,
} from "@ant-design/icons";

const StyledSidebar = styled(Layout.Sider)`
    height: 100vh;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    .logo {
        padding: 30px;
        text-align: center;
    }
    .logo a {
        font-family: "Grand Hotel";
        font-size: 30px;
        font-weight: 900;
    }

    .current-user {
        text-align: center;
        margin-bottom: 30px;
    }

    .top-part {
    }

    .bottom-part {
    }
`;

export const Sidebar = () => {
    return (
        <StyledSidebar
            breakpoint="lg"
            collapsedWidth="0"
            width={250}
            className="sidebar"
        >
            <div className="logo">
                <NextLink href={routes.app}>
                    <a>Notebook</a>
                </NextLink>
            </div>

            <div className="current-user">
                <Avatar size={64} icon={<UserOutlined />} />
            </div>

            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={["2"]}
                className="sidebar-nav"
            >
                <Menu.Item key="1" icon={<BookOutlined />}>
                    <NextLink href="/app">Library</NextLink>
                </Menu.Item>

                <Menu.Item key="2" icon={<FireOutlined />}>
                    <NextLink href="/app">Popular</NextLink>
                </Menu.Item>

                <Menu.Item key="3" icon={<UploadOutlined />}>
                    <NextLink href="/app">My Publication</NextLink>
                </Menu.Item>

                <Menu.Item key="4" icon={<StarOutlined />}>
                    <NextLink href="/app">My Favourites</NextLink>
                </Menu.Item>

                <Menu>
                    <Menu.Item key="5" icon={<SettingOutlined />}>
                        <NextLink href="/app">Settings</NextLink>
                    </Menu.Item>

                    <Menu.Item key="6" icon={<LogoutOutlined />}>
                        Logout
                    </Menu.Item>
                </Menu>
            </Menu>
        </StyledSidebar>
    );
};
