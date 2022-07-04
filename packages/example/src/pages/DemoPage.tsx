import React, {useEffect, useState} from 'react';
import Card from '../components/card/Card';
import Divider from '../components/divider/Divider';
import H4 from '../components/typography/types/H4';
import H6 from '../components/typography/types/H6';
import H5 from '../components/typography/types/H5';
import Subtitle1 from '../components/typography/types/Subtitle1';
import 'ui-neumorphism/dist/index.css'
import Topbar from '../containers/Topbar'
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

const StyledApp = styled.div<{
    background: string;
    dark: boolean;
}>`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color:  ${props => props.dark ? "white" : "black"};
  background-color: ${props => props.background};
`;

const StyledDocContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 40px 0;
`;

const DocLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 20%;
`;

const DocCenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: center;
  padding: 4px;
`;

const DocRightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const sliders = `
    <Slider dark={dark} />
    <Slider dark={dark} disabled />
    <Slider dark={dark} color={"green"}/>
`;

const slidersLabeled = `
    <Slider dark={dark}  label={"Default theme"} />
    <Slider dark={dark} disabled  label={"Disabled"} />
    <Slider dark={dark} color={"green"}  label={"Custom selector color"} />
`;

const slidersThemed = `
        <Slider background={"lightpink"} label={"Pass in any background color as string"} />
        <Slider background={"#41415A"} label={"Pass in background color as hex string"} />
        <Slider background={"rgb(0, 241, 122)"} label={"Pass in background color as rgb string"} />
)}`;

const slidersRange = `<Slider dark={dark} range={{min: 0, max: 4}} onChange={handleSliderChange} label={"Custom range"}/>`;
const url =
    'https://github.com/moclei/react-neumorphic-slider/blob/main/packages/example/src/pages/DemoPage.tsx';

export const DemoPage = ({size}: DemoPageProps) => {
    const [dark, setDark] = useState(true);
    const [open, setOpen] = useState(false);
    const [background1, setBg1] = useState(dark ? "#444444" : "#E4EBF5");
    const [text1, setText1] = useState(dark ? "white" : "black");
    const [sliderVal, setSliderVal] = useState(0);

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

    const handleSliderChange = (evt: any) => {
        setSliderVal(evt.target.value)
    }

    return (
            <StyledApp dark background={'#444444'}>
                <Card
                    flat
                    dark={dark}
                    className={`main-container`}
                    style={{width: "100%"}}
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
                            <Card
                                flat
                                className={`main-view`}
                            >
                                <Card flat dark={dark}>
                                    <H4>
                                            Slider
                                    </H4>
                                    <H6>An input field to select a numeric value within a given range (minimum and maximum values).</H6>
                                    <DocCard
                                        url={url}
                                        dark={dark}
                                        content={
                                            <StyledDocContainer style={{width: "100%"}}>
                                                <DocCenterColumn style={{alignItems: "center"}}>
                                                    <Slider dark={dark} style={{width: "200px"}}/>
                                                    <Slider dark={dark} disabled style={{width: "200px"}}/>
                                                    <Slider dark={dark} color={"green"} style={{width: "200px"}}/>
                                                </DocCenterColumn>
                                            </StyledDocContainer>
                                        }
                                        code={sliders}
                                    />
                                    <DocCard
                                        url={url}
                                        dark={dark}
                                        className='mt-12'
                                        title={<H5>Slider with label</H5>}
                                        subtitle={<Subtitle1>Slider can be provided with a label.</Subtitle1>}
                                        contentStyle={{display: "flex", justifyContent: "center"}}
                                        content={
                                            <StyledDocContainer style={{alignItems: "center"}}>
                                                <DocCenterColumn style={{alignItems: "flex-start"}}>
                                                    <Slider dark={dark}  label={"Default theme"} style={{width: "200px"}}/>
                                                    <Slider dark={dark} disabled  label={"Disabled"} style={{width: "200px"}}/>
                                                    <Slider dark={dark} color={"green"}  label={"Custom selector color"} style={{width: "200px"}}/>
                                                </DocCenterColumn>
                                            </StyledDocContainer>
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
                                            <StyledDocContainer style={{alignItems: "center"}}>
                                                <DocLeftColumn >
                                                    <p style={{color: text1}}>For auto theme, pick a color</p>
                                                    <div style={{width: "200px", padding: "24px 0"}}>
                                                        <SliderPicker
                                                            color={background1}
                                                            onChangeComplete={(color) => setBg1(color.hex)}/>
                                                    </div>
                                                </DocLeftColumn>
                                                <DocCenterColumn style={{alignItems: "flex-start"}}>
                                                    <Slider background={background1} label={"Auto theme"}  style={{width: "200px"}}/>
                                                    <Slider background={background1} disabled  label={"Auto theme - disabled"}  style={{width: "200px"}}/>
                                                    <Slider background={background1} color={"green"}  label={"Auto theme - custom selector color"}  style={{width: "200px"}}/>
                                                </DocCenterColumn>
                                                <DocRightColumn />
                                            </StyledDocContainer>
                                        }
                                        code={slidersThemed}
                                    />
                                    <DocCard
                                        url={url}
                                        dark={dark}
                                        className='mt-12'
                                        title={<H5>Slider with custom slider range</H5>}
                                        subtitle={<Subtitle1>Slider range is 0 to 100 by default, you can change it by passing in a custom range with format &#123; min: string, max: string&#125;.</Subtitle1>}
                                        content={
                                            <StyledDocContainer style={{alignItems: "center"}}>
                                                <DocLeftColumn >
                                                    Custom range set of &#123; min: 0, max: 4&#125;
                                                </DocLeftColumn>
                                                <div style={{display: "flex", flex: 2, flexDirection: "column", alignItems: "flex-start"}}>
                                                    <Slider dark={dark} range={{min: 0, max: 4}} onChange={handleSliderChange} label={"Custom range"}/>
                                                </div>
                                                <DocRightColumn >
                                                    Slider Value: {sliderVal}
                                                </DocRightColumn>
                                            </StyledDocContainer>
                                        }
                                        code={slidersRange}
                                    />
                                    <H4 className='mt-12'>
                                        <a href='#api'>
                                            API
                                        </a>
                                    </H4>
                                    <ApiCard entity='Slider' data={sliderControlApi(dark, "Slider")} />
                                </Card>
                            </Card>
                            {/*<RightBar dark={dark} size={size} />*/}
                        </Card>
                    </Card>
                </Card>
            </StyledApp>
        )
}

export default DemoPage;
