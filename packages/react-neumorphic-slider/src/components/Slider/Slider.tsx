import React, {useEffect, useMemo, useState} from 'react'

import {NuSwitchBody1, NuSwitchContainer, NuSwitchLabelStyled, NuSwitchStyled} from "./Slider.styles";

export const uid = () => {
    return `_${(((1 + Math.random()) * 0x10000) | 0).toString(8).substring(1)}_`
}

interface SliderProps {
    value?: any,
    id?: string,
    name?: string,
    label?: string,
    initialValue?: number,
    color?: string,
    onClick?: () => void,
    required?: boolean,
    disabled?: boolean,
    onChange?: (event: any, id: string, slideValue: number) => void,
    dark?: boolean,
    style?: any,
    className?: string,
    labelClassName?: string,
}

const Slider = ({disabled = false, color, initialValue, dark = true, style, label, className, labelClassName, ...props}: SliderProps) => {
    /*static displayName = 'NuSwitch'
    static defaultProps = DEFAULT_PROPS
    static propTypes = SELECTION_CONTROL_PROP_TYPES
    render() {
        return <SelectionControl type='switch' {...this.props} />
    }*/
    const id = useMemo(() => props.id || uid(), []);
    const [slideValue, setSlideValue] = useState<number>(initialValue || 0);
    const displayName = 'NuSwitch';

    const handleChange = (event: any) => {
        const slideValue = event.target.value
        console.debug("slideValue: ", slideValue);
        setSlideValue(slideValue);
        props.onChange && props.onChange(event, id, slideValue )
    }

        return (
            <NuSwitchContainer
                style={style}
                className={`${className}`}
            >
                <NuSwitchStyled
                    id={id}
                    checked={false}
                    onChange={(e) => handleChange(e)}
                    type={"slider"}
                />
                <NuSwitchLabelStyled htmlFor={id} className={`${labelClassName}`}>
                    <NuSwitchBody1 dark={dark} disabled={disabled}>
                        {label}
                    </NuSwitchBody1>
                </NuSwitchLabelStyled>
            </NuSwitchContainer>
        )
}

export default Slider
