import React from 'react'

import Typography from '../Typography';
import { DEFAULT_PROPS, TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'

class Caption extends React.Component {
  static displayName = 'NuCaption'

  static defaultProps = DEFAULT_PROPS

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography {...this.props} type='caption'>
        {this.props.children}
      </Typography>
    )
  }
}

export default Caption
