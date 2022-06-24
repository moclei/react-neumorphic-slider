import React, {ChangeEvent, useEffect, useMemo, useRef, useState} from 'react'
import {ThemeProvider} from 'styled-components';
import {NuSliderBody1, NuSliderContainer, NuSliderLabelStyled, NuSliderStyled, SliderThemeProps} from "./Slider.styles";
import hexRgb from 'hex-rgb';
const Color = require('color');

export const uid = () => {
    return `_${(((1 + Math.random()) * 0x10000) | 0).toString(8).substring(1)}_`
}

const commonTheme = {
    white: '#ffffff',
    black: '#000000',
    primary: '#f71b94',
}
const lightTheme = {
    primary: '#fa7ac0',
    background: '#E4EBF5',
    bgDarkShadow: '#bec8e4',
    bgLightShadow: '#ffffff',
    text: 'rgba(0, 0, 0, 0.87)',
    textDisabled: 'rgba(0, 0, 0, 0.38)',
    textSecondary: 'rgba(0, 0, 0, 0.60)',
    bgDisabled: '#dee5e8',
    selectorBg: '#ffffff'
}
const darkTheme = {
    primary: '#aa0660',
    background: '#444444',
    bgDarkShadow: '#363636',
    bgLightShadow: '#525252',
    text: 'rgba(255, 255, 255, 0.87)',
    textDisabled: 'rgba(255, 255, 255, 0.38)',
    textSecondary: 'rgba(255, 255, 255, 0.60)',
    bgDisabled: '#727272',
    selectorBg: "#ffffff"
}

interface SliderProps {
    value?: any,
    id?: string,
    name?: string,
    label?: string,
    color?: string,
    mode?: SliderTheme,
    background?: string;
    onClick?: () => void,
    required?: boolean,
    disabled?: boolean,
    onChange?: (event: any, id: string, slideValue: number) => void,
    style?: any,
    className?: string,
    labelClassName?: string,
    theme?: SliderThemeProps,
    range?: SliderRange
}

interface SliderRange {
    min: string | number;
    max: string | number;
}

export enum SliderTheme {
    DARK = "dark",
    LIGHT = "light"
}

export const Slider = ({
    disabled = false,
    background,
    mode,
                    color,
                    value = "0",
                    range = {min: "0", max: "100"},
                    style,
                    label,
                    labelClassName,
                    className,
                    ...props}: SliderProps) => {
    const sliderRef = useRef()  as React.MutableRefObject<HTMLInputElement>;
    const defaultTheme = (!!mode && mode === SliderTheme.DARK ? darkTheme : lightTheme) || darkTheme;
    const overrideColor = color ? {selectorBg: color} : {};
    const overrideBackground = background ? {background: background} : {};
    const myTheme = {...commonTheme, ...defaultTheme, ...overrideColor, ...overrideBackground};
    const id = useMemo(() => props.id || uid(), []);
    const [slideValue, setSlideValue] = useState<number>(value);
    const [theme, setTheme] = useState(myTheme);
    useEffect(() => {
        if (!!background) {
            generateTheme();
        }
    }, [background])
    const generateTheme = () => {
        // no matter the luminosity
        const rgbBackground = Color(hexRgb(background!, {format: 'css'}));
        let lightShadow = rgbBackground.lighten(0.5);
        let darkShadow =  rgbBackground.darken(0.5);
        let selectorBg = rgbBackground.lighten(0.15);
        let textColor = 'rgba(0, 0, 0, 0.87)';
        let textDisabled = 'rgba(0, 0, 0, 0.38)';
        let textSecondary = 'rgba(0, 0, 0, 0.60)';
        let bgDisabled = '#dee5e8';

        if (rgbBackground.luminosity() < 0.2 ) {
            // not too light, dark enough
            textColor = 'rgba(255, 255, 255, 0.87)';
            textDisabled = 'rgba(255, 255, 255, 0.38)';
            textSecondary = 'rgba(255, 255, 255, 0.60)';
            bgDisabled = '#727272';
            selectorBg = rgbBackground.lighten(0.15);
        }
        if (rgbBackground.luminosity() < 0.02 ) {
            //super dark
            const newMax = 5;
            const newMin = 2;
            const oldMax = 1;
            const oldMin = 0.98;
            const newRange = newMax - newMin;
            const oldRange = oldMax - oldMin;
            const newValue = ((((1 - rgbBackground.luminosity()) - oldMin) * newRange) / oldRange) + newMin;
            lightShadow = rgbBackground.lighten(newValue);
            darkShadow = rgbBackground.lighten(newValue / 2);
            selectorBg = rgbBackground.lighten(0.2);
        }
        if (rgbBackground.luminosity() > 0.2 ) {
            // light enough
            lightShadow = rgbBackground.lighten(0.25);
            darkShadow =  rgbBackground.darken(0.5);
        }
        setTheme({
            ...theme,
            bgDarkShadow: darkShadow.grayscale().hex(),
            bgLightShadow: lightShadow.grayscale().hex(),
            text: textColor,
            textDisabled,
            textSecondary,
            bgDisabled,
            selectorBg
        });
    }

    const handleChange = (event: any) => {
        const slideValue = event.target.value
        setSlideValue(slideValue);
        props.onChange && props.onChange(event, id, slideValue )
    }

        return (
            <ThemeProvider theme={theme}>
            <NuSliderContainer
                style={style}
                ref={sliderRef}
                className={`${className}`}
            >
                    <NuSliderStyled
                        id={id}
                        min={range.min}
                        max={range.max}
                        disabled={disabled}
                        value={slideValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                        type={"range"}
                    />
                    <NuSliderLabelStyled
                        htmlFor={id} className={`${labelClassName}`}>
                        <NuSliderBody1 disabled={disabled}>
                            {label}
                        </NuSliderBody1>
                    </NuSliderLabelStyled>
            </NuSliderContainer>
            </ThemeProvider>
        )
}
