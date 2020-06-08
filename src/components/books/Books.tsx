import styled from "styled-components";
import { Book } from "./Book";
import { Row } from "antd";

const StyledBooks = styled.div``;

export const Books = () => {
    return (
        <StyledBooks>
            <Row gutter={[30, 30]}>
                <Book
                    title="The Shannara Chronicles"
                    synopsis="This is the book description"
                />

                <Book
                    title="The Shannara Chronicles"
                    synopsis="This is the book description"
                />

                <Book
                    title="The Shannara Chronicles"
                    synopsis="This is the book description"
                />

                <Book
                    title="The Shannara Chronicles"
                    synopsis="This is the book description"
                />

                <Book
                    title="The Shannara Chronicles"
                    synopsis="This is the book description"
                />

                <Book
                    title="The Shannara Chronicles"
                    synopsis="This is the book description"
                />

                <Book
                    title="The Shannara Chronicles"
                    synopsis="This is the book description"
                />

                <Book
                    title="The Shannara Chronicles"
                    synopsis="This is the book description"
                />
            </Row>
        </StyledBooks>
    );
};
