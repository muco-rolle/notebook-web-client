import { Card, Avatar, Col } from "antd";
import styled from "styled-components";
import { EllipsisOutlined } from "@ant-design/icons";

const StyledBook = styled(Card)``;

interface BookProps {
    image?: string;
    title: string;
    synopsis: string;
}
export const Book = (props: BookProps) => {
    const { Meta } = Card;

    const { image, title, synopsis } = props;

    return (
        <Col className="gutter-row" span={6}>
            <StyledBook
                hoverable
                cover={
                    <img
                        alt={title}
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[<EllipsisOutlined key="ellipsis" />]}
            >
                <Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={title}
                    description={synopsis}
                />
            </StyledBook>
        </Col>
    );
};
