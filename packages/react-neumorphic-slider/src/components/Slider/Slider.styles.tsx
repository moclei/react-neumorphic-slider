import styled from "styled-components";

export const NuSwitchStyled = styled.input`
  width: 26px;
  height: 26px;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  display: inline-block;
  box-sizing: border-box;
  -webkit-appearance: none;
  transition: all 200ms ease-in-out;
  &:hover:before {
    background-color: var(--selector-bg);
  }
  &:before,
  &:after {
    content: "";
    overflow: hidden;
    position: absolute;
    border-radius: 32px;
    background-color: var(--bg-color);
  },
  &:before {
    z-index: 2;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    transform: translate3d(0%, 0, 0);
    box-shadow: var(--box-shadow-small);
    transition: all 0.2s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  }
  &:after {
    z-index: 1;
    width: 48px;
    height: 28px;
    isolation: isolate;
    box-shadow: var(--box-shadow-inset);
  }
  &:checked:before {
    transform: translate3d(100%, 0, 0);
    background-color: var(--selector-bg);
  }
  &.nu-switch--disabled:before {
    background-color: var(--text-disabled) !important;
  }
  &.nu-switch.nu-switch--disabled {
    opacity: 0.75;
  }
}
`;
export const NuSwitchLightStyled = styled.div`
  --bg-color: var(--light-bg);
  --selector-bg: var(--text-color);
  --text-color: var(--g-text-color-light);
  --text-disabled: var(--g-text-color-disabled-light);
  --box-shadow-small: 1px 1px 2px var(--light-bg-dark-shadow),
    -1px -1px 2px var(--light-bg-light-shadow);
  --box-shadow-inset: inset -2px -2px 3px var(--light-bg-light-shadow),
  inset 2px 2px 3px var(--light-bg-dark-shadow);
`;
export const NuSwitchDarkStyled = styled.div`
  --bg-color: var(--dark-bg);
  --selector-bg: var(--text-color);
  --text-color: var(--g-text-color-dark);
  --text-disabled: var(--g-text-color-disabled-dark);
  --box-shadow-small: 1px 1px 2px var(--dark-bg-dark-shadow),
    -1px -1px 2px var(--dark-bg-light-shadow);
  --box-shadow-inset: inset -2px -2px 3px var(--dark-bg-light-shadow),
  inset 2px 2px 3px var(--dark-bg-dark-shadow);
`;
export const NuSwitchLabelStyled = styled.label`
    font-size: 16px;
    margin-left: 28px;
    margin-top: -2px;
    color: var(--text-color);
`;

export const NuSwitchContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 4px 8px !important;
    padding: 4px !important;
`;

interface NuSwitchBody1Props {
    dark: boolean;
    disabled: boolean;
}
export const NuSwitchBody1 = styled.p<NuSwitchBody1Props>`
  letter-spacing: 0.5px;
  font-weight: 400;
  font-size: 16px;
`;
