/// <reference types="react" />
import { SliderThemeProps } from "./Slider.styles";
export declare const uid: () => string;
interface SliderProps {
    value?: any;
    id?: string;
    name?: string;
    label?: string;
    color?: string;
    mode?: SliderTheme;
    background?: string;
    onClick?: () => void;
    required?: boolean;
    disabled?: boolean;
    onChange?: (event: any, id: string, slideValue: number) => void;
    style?: any;
    className?: string;
    labelClassName?: string;
    theme?: SliderThemeProps;
    range?: SliderRange;
}
interface SliderRange {
    min: string | number;
    max: string | number;
}
export declare enum SliderTheme {
    DARK = "dark",
    LIGHT = "light"
}
export declare const Slider: ({ disabled, background, mode, color, value, range, style, label, labelClassName, className, ...props }: SliderProps) => JSX.Element;
export {};
