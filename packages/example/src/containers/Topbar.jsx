import React, { createElement } from 'react'
import Icon from '@mdi/react'
import {
    mdiNpm,
    mdiMenu,
    mdiGithub,
    mdiLightbulb,
    mdiLightbulbOutline
} from '@mdi/js'

import {H2, H6, Card, IconButton, RadioGroup, Radio, ToggleButton} from 'ui-neumorphism'
import {SliderPicker} from "react-color";

const npmUrl = 'https://www.npmjs.com/package/@moclei/react-neumorphic-slider';
const githubUrl = 'https://github.com/moclei/react-neumorphic-slider';

class Topbar extends React.Component {
    open(url) {
        window.open(url, '_blank')
    }

    render() {
        const { dark, onClick, onMenuClick, size} = this.props
        const isSmall = size === 'sm' || size === 'xs'
        const menuButton = isSmall ? (
            <IconButton onClick={onMenuClick}>
                <Icon path={mdiMenu} size={1} />
            </IconButton>
        ) : null

        const title = createElement(
            isSmall ? H6 : H2,
            { style: { color: 'var(--primary)' }, className: 'topbar-title' },
            'react-neumorphic-slider'
        )

        return (
            <Card flat dark={dark} className={`main-topbar`}>
                <Card flat className='d-flex align-center topbar-headline'>
                    {menuButton}
                    {title}
                </Card>
                <Card flat className='d-flex align-center topbar-actions'>
                    <div>
                        <ToggleButton className='topbar-action' onChange={onClick}>
                            <Icon path={dark ? mdiLightbulbOutline : mdiLightbulb} size={1} />
                        </ToggleButton>
                    </div>
                    <IconButton
                        className='topbar-action mr-1'
                        onClick={() => this.open(npmUrl)}
                    >
                        <Icon path={mdiNpm} size={1.4} />
                    </IconButton>
                    <IconButton
                        className='topbar-action'
                        onClick={() => this.open(githubUrl)}
                    >
                        <Icon path={mdiGithub} size={1} />
                    </IconButton>
                </Card>
            </Card>
        )
    }
}

export default Topbar

