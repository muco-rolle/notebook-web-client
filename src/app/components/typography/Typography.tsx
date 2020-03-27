import {
    HeadingOne,
    HeadingThree,
    HeadingFour,
    HeadingSix,
    HeadingTwo,
    HeadingFive
} from './Headings';
import { TextOne, TextTWo, TextThree, TextFour } from './Text';

interface HeadingProps {
    level: number;
    children: React.ReactNode;
}

interface TextProps {
    level: number;
    children: React.ReactNode;
}

export const Heading = (props: HeadingProps) => {
    switch (props.level) {
        case 1:
            return <HeadingOne>{props.children}</HeadingOne>;
        case 2:
            return <HeadingTwo>{props.children}</HeadingTwo>;
        case 3:
            return <HeadingThree>{props.children}</HeadingThree>;
        case 4:
            return <HeadingFour>{props.children}</HeadingFour>;
        case 5:
            return <HeadingFive>{props.children}</HeadingFive>;
        case 6:
            return <HeadingSix>{props.children}</HeadingSix>;

        default:
            return <HeadingOne>{props.children}</HeadingOne>;
    }
};

export const Text = (props: TextProps) => {
    switch (props.level) {
        case 1:
            return <TextOne>{props.children}</TextOne>;
        case 2:
            return <TextTWo>{props.children}</TextTWo>;
        case 3:
            return <TextThree>{props.children}</TextThree>;
        case 4:
            return <TextFour>{props.children}</TextFour>;

        default:
            return <TextOne>{props.children}</TextOne>;
    }
};
