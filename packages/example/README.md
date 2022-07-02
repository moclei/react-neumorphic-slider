# [React Neumorphic Slider](http://moclei.github.io/react-neumorphic-slider/)

* **A slider component for React**, built with typescript and styled-components.

## How to use

```sh
npm install react-neumorphic-slider
```
or
```sh
yarn add react-neumorphic-slider
```

### Documentation
> [Documentation with examples](https://moclei.github.io/react-neumorphic-slider/)
>
> [Demo app](https://github.com/moclei/react-neumorphic-slider/tree/main/packages/example)
>
> [Component source](https://github.com/moclei/react-neumorphic-slider/tree/main/packages/react-neumorphic-slider)


### Include the Component

```js
import React from 'react'
import Slider from 'react-neumorphic-slider'

class Component extends React.Component {

  render() {
    return <Slider />
  }
}
```

### Usage Options
With label and default theme (light)
```js
 <div style={{width: "100%", background: "#E4EBF5", padding: "24px"}}>
                  <Slider label={"Default theme (light)"} /*same as mode={SliderTheme.LIGHT}*/ />
 </div>
```
With dark theme
```js
              <div style={{width: "100%", background: "#444444", padding: "24px"}}>
                <Slider label={"Dark theme"} mode={SliderTheme.DARK} />
              </div>
```
With auto generated theme - requires passing in the background color
```js
              <div style={{width: "100%", background: "inherit", padding: "24px"}}>
                  <Slider label={"Auto theme"} background={color} />
              </div>
```

Get the slider value - pass in a handler function to onChange
```js
                  <Slider label={"Auto theme"} background={color} onChange={handleChange} />
```
Set a custom range in the format {min: string, max: string}. Default is 0 to 100.
```js
                  <Slider label={"Auto theme"} background={color} onChange={handleChange} range={{min: "0", max: "7"}} />
```

Disabled
```js
                  <Slider disabled={true} />
```
