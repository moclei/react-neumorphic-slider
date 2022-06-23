export interface SliderThemeProps {
    primary: string;
    background: string;
    bgDarkShadow: string;
    bgLightShadow: string;
    text: string;
    textDisabled: string;
    textSecondary: string;
    bgDisabled: string;
    selectorBg: string;
}
export declare const NuSliderStyled: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const NuSliderLabelStyled: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const NuSliderContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
interface NuSliderBody1Props {
    disabled: boolean;
}
export declare const NuSliderBody1: import("styled-components").StyledComponent<"p", any, NuSliderBody1Props, never>;
export {};
