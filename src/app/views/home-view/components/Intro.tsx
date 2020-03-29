import styled from 'styled-components';
import { Button } from 'rsuite';
import { greyColor } from '@utils';

const StyledIntro = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 150px;

    .intro-text {
        margin-top: 50px;

        p {
            font-weight: 600;
            color: ${greyColor(4)};
            width: 500px;
            line-height: 1.4;
            font-size: 16px;
            margin: 10px 0 30px 0;
        }
    }

    .intro-image {
        img {
            height: 400px;
        }
    }

    .buttons {
        button:first-child {
            margin-right: 40px;
        }
    }
`;

export function Intro() {
    return (
        <StyledIntro>
            <div className="intro-text">
                <h1>Welcome to notebook</h1>
                <p>
                    A platform for reading and writting, it helps think and
                    share your ideas with the rest of the world.
                </p>

                <div className="buttons">
                    <Button appearance="primary" size="lg">
                        start reading
                    </Button>
                    <Button appearance="primary" size="lg">
                        start writting
                    </Button>
                </div>
            </div>
            <div className="intro-image">
                <img
                    src="images/illustration-working.svg"
                    alt="illustraton working"
                />
            </div>
        </StyledIntro>
    );
}
