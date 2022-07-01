import React, {useEffect, useState} from 'react';
import Card from '../components/card/Card';
import Divider from '../components/divider/Divider';
import H4 from '../components/typography/types/H4';
import H6 from '../components/typography/types/H6';
import H5 from '../components/typography/types/H5';
import Subtitle1 from '../components/typography/types/Subtitle1';
import 'ui-neumorphism/dist/index.css'
import Topbar from '../containers/Topbar'
import {RightBar} from '../containers/RightBar'
import DocCard from '../containers/DocCard';
import ApiCard from '../containers/ApiCard';
import {sliderControlApi} from "../docs/common";
import {Slider} from "@moclei/react-neumorphic-slider";
import styled from "styled-components";
import { SliderPicker } from 'react-color';
import hexRgb from "hex-rgb";
const Color = require('color');

interface DemoPageProps {
    location: any;
    size: any;
}

interface StyledAppProps {
    dark: boolean;
    background: string;
}
const StyledApp = styled.div<StyledAppProps>`
  text-align: center;
  background-color: ${props => props.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color:  ${props => props.dark ? "white" : "black"};
`;


const sliders = `<Slider color='lightgreen'/>
            <Slider />
            <Slider disabled/>`;

const slidersLabeled = `<Slider color='lightgreen' label={"Color"}/>
            <Slider label={"No color"}/>
            <Slider disabled label={"Disabled"}/>`;

export const DemoPage = ({location, size}: DemoPageProps) => {
    const [dark, setDark] = useState(true);
    const [open, setOpen] = useState(false);
    const [background1, setBg1] = useState(dark ? "#444444" : "#E4EBF5");
    const [text1, setText1] = useState(dark ? "white" : "black");
    const [sliderVal, setSliderVal] = useState(0);
    // const [color, setColor ] = useState( dark ? "#444444" : "#E4EBF5");

    useEffect(() => {
        setBg1(dark ? "#444444" : "#E4EBF5");
    }, [dark]);
    useEffect(() => {
        const rgbBg1 = Color(hexRgb(background1!, {format: 'css'}));
        setText1(rgbBg1.luminosity() < 0.2  ? "white" : "black");
    }, [background1])
    const toggleTheme = () => {
        setDark(!dark)
    };
    const toggleSidebar = () => {
        setOpen(!open)
    };

    useEffect(() => {
        console.debug("useEffect(dark): ", dark);
    }, [dark]);

    const handleSliderChange = (evt: any) => {
        console.debug("slider change evt: ", evt);
        setSliderVal(evt.target.value)
    }

    const getIsHome = () => {
        const { pathname: p } = location
        return (
            p === '/' || p === '/home' || p === '/examples' || p === '/typography'
        )
    };
    const url =
        'https://github.com/moclei/react-neumorphic-slider/packages/example/src/pages/DemoPage.jsx';
    return (
            <StyledApp dark background={'#444444'}>
                <Card
                    flat
                    dark={dark}
                    className={`main-container`}
                >
                    <Card>
                        <Topbar
                            size={size}
                            dark={dark}
                            onClick={toggleTheme}
                            onMenuClick={toggleSidebar}
                        />
                        <Divider dense dark={dark} />
                        <Card flat className='main-content'>
                            {/*<Sidebar
                                dark={dark}
                                open={open}
                                size={size}
                                onClick={onSidebarClick}
                                onOutsideClick={toggleSidebar}
                            />*/}
                            <Card
                                flat
                                className={`main-view main-view--large main-view--home`}
                            >
                                <Card flat dark={dark}>
                                    <H4>
                                            Slider
                                    </H4>
                                    <H6>An input field to select a numeric value within a given range (minimum and maximum values).</H6>
                                  {/*  <Subtitle1 className='mt-3'>
                                        The Slider is an input element of type "range"
                                    </Subtitle1>*/}
                                    <DocCard
                                        url={url}
                                        dark={dark}
                                        content={
                                            <div className='d-flex align-center justify-center flex-wrap' style={{flexDirection: "row", width: "100%", height: "100%", padding: "40px 0"}}>
                                                <div style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    flex: 2,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    padding: "4px",
                                                }}>
                                                    <Slider dark={dark} style={{width: "200px"}}/>
                                                    <Slider dark={dark} disabled style={{width: "200px"}}/>
                                                    <Slider dark={dark} color={"green"} style={{width: "200px"}}/>
                                                </div>
                                            </div>
                                        }
                                        code={sliders}
                                    />
                                    <DocCard
                                        url={url}
                                        dark={dark}
                                        className='mt-12'
                                        title={<H5>Slider with label</H5>}
                                        subtitle={<Subtitle1>Slider can be provided with a label.</Subtitle1>}
                                        content={
                                            <div style={{dflexDirection: "row", alignItems: "center", width: "500px", height: "100%", padding: "40px 0"}}>
                                                    <Slider dark={dark}  label={"Default theme"} style={{width: "200px"}}/>
                                                    <Slider dark={dark} disabled  label={"Disabled"} style={{width: "200px"}}/>
                                                    <Slider dark={dark} color={"green"}  label={"Custom selector color"} style={{width: "200px"}}/>
                                            </div>
                                        }
                                        code={slidersLabeled}
                                    />
                                    <DocCard
                                        url={url}
                                        dark={dark}
                                        className='mt-12'
                                        title={<H5>Slider with auto theme to match background</H5>}
                                        color={background1}
                                        subtitle={<Subtitle1>Slider can be provided with a background color and it will automatically match the contrast for visibility.</Subtitle1>}
                                        content={
                                            <div className='d-flex align-center justify-center flex-wrap' style={{flexDirection: "row", width: "100%", height: "100%", padding: "40px 0"}}>
                                                <div style={{display: "flex", flexDirection: "column", flex: 1, margin: "24px", alignItems: "center"}}>
                                                    <p style={{color: text1}}>For auto theme, pick a color</p>
                                                    <div style={{width: "200px", padding: "24px 0"}}>
                                                        <SliderPicker
                                                            color={background1}
                                                            onChangeComplete={(color) => setBg1(color.hex)}/>
                                                    </div>
                                                </div>
                                                <div style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    flex: 2,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    padding: "4px",
                                                }}>
                                                    <Slider background={background1} label={"Auto theme"}/>
                                                    <Slider background={background1} disabled  label={"Auto theme - disabled"}/>
                                                    <Slider background={background1} color={"green"}  label={"Auto theme - custom selector color"}/>
                                                </div>
                                                <div style={{display: "flex", flexDirection: "column", flex: 1, padding: "4px"}}/>
                                            </div>
                                        }
                                        code={slidersLabeled}
                                    />
                                    <DocCard
                                        url={url}
                                        dark={dark}
                                        className='mt-12'
                                        title={<H5>Slider with custom slider range</H5>}
                                        subtitle={<Subtitle1>Slider range is 0 to 100 by default, you can change it by passing in a custom range with format &#123; min: string, max: string&#125;.</Subtitle1>}
                                        content={
                                            <div className='d-flex align-center justify-center flex-wrap' style={{flexDirection: "row", width: "100%", height: "100%", padding: "40px 0"}}>
                                                <div style={{flex: 1}}>
                                                    Custom range set of &#123; min: 0, max: 4&#125;
                                                </div>
                                                <div style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    flex: 2,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    padding: "4px",
                                                }}>
                                                    <Slider dark={dark} range={{min: 0, max: 4}} onChange={handleSliderChange} label={"Custom range"}/>
                                                </div>
                                                <div style={{flex: 1}}>
                                                    Slider Value: {sliderVal}
                                                </div>
                                            </div>
                                        }
                                        code={slidersLabeled}
                                    />
                                    elements of type range let the user specify a numeric value which must be no less than a given value, and no more than another given value. The precise value, however, is not considered important. This is typically represented using a slider or dial control rather than a text entry box like the number input type.
                                    <H4 className='mt-12'>
                                        <a href='#api'>
                                            API
                                        </a>
                                    </H4>
                                    <ApiCard entity='Slider' data={sliderControlApi(dark)} />
                                </Card>
                            </Card>
                            <RightBar dark={dark} size={size} />
                        </Card>
                    </Card>
                </Card>
            </StyledApp>
        )
}

export default DemoPage;
