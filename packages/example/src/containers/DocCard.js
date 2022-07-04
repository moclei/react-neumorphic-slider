import React, {useEffect} from 'react'

import { Card } from 'ui-neumorphism'
import CodeBlock from '../containers/CodeBlock.jsx'

class DocCard extends React.Component {
    static displayName = 'NuDocCard'

    state = {
        darkTheme: this.props.dark
    }

    handleTheme(e) {
        this.setState({ darkTheme: !this.state.darkTheme })
    }

    render() {
        const {
            url,
            code,
            dark,
            style,
            contentStyle,
            title,
            content,
            subtitle,
            className,
            color
        } = this.props
        const { darkTheme } = this.state;
        const myStyle = {...contentStyle, background: color};

        const localDark = darkTheme !== undefined
        return (
            <Card flat dark={dark} className={className} style={style}>
                {title}
                {subtitle}
                <Card dark={dark} outlined className='mt-4' >
                    <Card flat outlined={false} style={myStyle} className='py-4'>
                        {content}
                    </Card>
                    <CodeBlock
                        dark={dark}
                        url={url}
                        lang='jsx'
                        onThemeChange={this.handleTheme.bind(this)}
                    >
                        {code}
                    </CodeBlock>
                </Card>
            </Card>
        )
    }
}

export default DocCard
