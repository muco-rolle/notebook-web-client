import { AppLayout } from "layouts";
import { Typography, Card } from "antd";

import { Books } from "components";

export const AppView = () => {
    return (
        <AppLayout documentTitle="Popular Books">
            <Typography.Title level={1}>Popular Books</Typography.Title>

            <Books />
        </AppLayout>
    );
};
