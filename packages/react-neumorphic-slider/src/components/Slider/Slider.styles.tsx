import styled from "styled-components";
import React from "react";

export interface SliderThemeProps {
        primary: string
        background: string;
        bgDarkShadow: string;
        bgLightShadow: string;
        text: string;
        textDisabled: string;
        textSecondary: string;
        bgDisabled: string;
        selectorBg: string;
}

interface SliderStyledProps {
        disabled: boolean;
}

export const NuSliderStyled = styled.input<SliderStyledProps>`
  height: 26px;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  display: inline-block;
  box-sizing: border-box;
  -webkit-appearance: none;
  transition: all 200ms ease-in-out;
  background: inherit;
  &::after {
  content: "";
  overflow: hidden;
  position: absolute;
  border-radius: 32px;
    padding: 4px;
          background-color: ${(props) => props.disabled ? props.theme.bgDisabled : "inherit"};
    z-index: 1;
    width: 100%;
    height: 28px;
    isolation: isolate;
    box-shadow: ${(props) => `inset -2px -2px 3px ${props.theme.bgLightShadow}, inset 2px 2px 3px ${props.theme.bgDarkShadow}`}
  }
  &:focus {
    &::-webkit-slider-thumb {
            background-color: ${(props) => props.theme.selectorBg}
    }
  }
        
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    border-radius: 32px;
    background-color: ${(props) => props.disabled ? props.theme.bgDisabled : "inherit"};
    z-index: 2;
    width: 24px;
    top: 5px;
    left: 4px;
    height: 24px;
    transform: translate3d(0%, 0, 0);
    box-shadow: ${(props) => `1px 1px 2px ${props.theme.bgDarkShadow}, -1px -1px 2px ${props.theme.bgLightShadow}`};
    transition: all 0.2s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    &:hover {
            background-color: ${(props) => props.disabled ? props.theme.bgDisabled : props.theme.selectorBg}
    }
  }
  &::-moz-range-thumb {
    overflow: hidden;
    position: relative;
    border-radius: 32px;
          background-color: ${(props) => props.disabled ? props.theme.bgDisabled : "inherit"};
    z-index: 2;
    width: 24px;
    top: 5px;
    left: 4px;
    height: 24px;
    transform: translate3d(0%, 0, 0);
    box-shadow: ${(props) => `1px 1px 2px ${props.theme.bgDarkShadow}, -1px -1px 2px ${props.theme.bgLightShadow}`};
    transition: all 0.2s cubic-bezier(0.85, 0.05, 0.18, 1.35);
          &:hover {
                  background-color: ${(props) => props.disabled ? props.theme.bgDisabled : props.theme.selectorBg}
          }
  }
`;
export const NuSliderLabelStyled = styled.label`
    font-size: 16px;
    margin-left: 28px;
    margin-top: -2px;
  color: ${(props) => props.theme.text};
`;

export const NuSliderContainer = styled.div`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: inherit;
        margin: 4px 8px !important;
        padding: 4px !important;
`;

interface NuSliderBody1Props {
        disabled: boolean;
}
export const NuSliderBody1 = styled.p<NuSliderBody1Props>`
        letter-spacing: 0.5px;
        font-weight: 400;
        font-size: 16px;
`;
