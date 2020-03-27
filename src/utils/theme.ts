import { DefaultTheme } from 'styled-components';

interface ITheme {
    theme: DefaultTheme;
}

// colors
export const primaryColor = (level: number) => (props: ITheme) =>
    props.theme.light.colors.primary[level];

export const greyColor = (level: number) => (props: ITheme) =>
    props.theme.light.colors.grey[level];

export const successColor = (level: number) => (props: ITheme) =>
    props.theme.light.colors.success[level];

// fonts
export const font = (fontName: string) => (props: ITheme) =>
    props.theme.light.fonts[fontName];
