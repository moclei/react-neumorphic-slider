import React from 'react'

import Typography from '../Typography';
import { DEFAULT_PROPS, TYPOGRAPHY_PROP_TYPES } from '../../../assets/index'

class H6 extends React.Component {
  static displayName = 'NuH6'

  static defaultProps = DEFAULT_PROPS

  static propTypes = TYPOGRAPHY_PROP_TYPES

  render() {
    return (
      <Typography {...this.props} type='h6'>
        {this.props.children}
      </Typography>
    )
  }
}

export default H6
