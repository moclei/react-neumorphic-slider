import React, {ChangeEvent, useEffect, useMemo, useState} from 'react';
import styled from "styled-components";


const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
interface CheckStyleProps {
    checked: boolean;
}
const StyledCheckbox = styled.div<CheckStyleProps>`
  /*display: inline-block;*/
  display: flex;
  width: 24px;
  height: 24px;
  background: ${props => (props.checked ? 'salmon' : 'salmon')};
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`
interface CheckProps {
    onCheckChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    checked: boolean;
}

const ThemeCheck = ({onCheckChange, checked, className, ...props}: CheckProps) => {

    return (
        <CheckboxContainer className={className}>
            <HiddenCheckbox checked={checked} onChange={onCheckChange} />
            <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    )
}

export default ThemeCheck
