import React, {useState} from 'react';
import styled from "styled-components";
import {Slider, SliderTheme} from "@moclei/react-neumorphic-slider";
import {ColorResult, SketchPicker} from 'react-color';
import {Switch} from "ui-neumorphism";
import 'ui-neumorphism/dist/index.css';

const Color = require('color');

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

const customTheme = {
    primary: '#aa0660',
    background: '#444444',
    bgDarkShadow: '#222222',
    bgLightShadow: '#575757',
    text: 'rgba(255, 255, 255, 0.87)',
    textDisabled: 'rgba(255, 255, 255, 0.38)',
    textSecondary: 'rgba(255, 255, 255, 0.60)',
    bgDisabled: '#727272',
    selectorBg: '#aa0660',
}

function App() {
    const [checkVal, setCheckVal] = useState<boolean>(false);
    const [color, setColor ] = useState( checkVal ? "#444444" : "#E4EBF5");
    const [theme, setTheme] = useState(customTheme)
    const handleCheckChange = (event: any) => {
        console.debug("event.checked: ", event.checked);
        setCheckVal(event.checked);
        setColor(event.checked ? "#444444" : "#E4EBF5")
    }

    return (
      <StyledApp dark={checkVal} background={color}>
          <div style={{flex: 1}}>
            React neumorphic slider example
          </div>
          <div style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
          }}>
              <div style={{display: "flex", alignItems: "center", padding: "24px"}}>
                  <Switch color='purple' onChange={handleCheckChange}/>
                  <span style={{ marginLeft: 8 }}>Dark mode</span>
              </div>
              <p style={{padding: "24px"}}>Auto theme Background color picker</p>
              <SketchPicker
              color={color}
              onChangeComplete={(color: ColorResult) => setColor(color.hex)}
              />
          </div>
          <div style={{display: "flex", flex: 3, flexDirection: "column", width: "400px"}}>
              <div style={{width: "100%", background: "#E4EBF5", padding: "24px"}}>
                  <Slider label={"Default theme (light)"} /*same as mode={SliderTheme.LIGHT}*/ />
              </div>
              <div style={{width: "100%", background: "#444444", padding: "24px"}}>
                <Slider label={"Dark theme"} mode={SliderTheme.DARK} />
              </div>
              <div style={{width: "100%", background: "inherit", padding: "24px"}}>
                  <Slider label={"Auto theme"} background={color} />
              </div>
          </div>

      </StyledApp>
  );
}

export default App;
