import React from 'react'
import {
  Link,
} from 'react-router-dom'
import PropTypes from 'prop-types'

class Regions extends React.PureComponent {
  static propTypes = {
    region: PropTypes.shape({}).isRequired,
  }

  render() {
    const {
      region,
    } = this.props

    return (
      <div>
        <div>{`name: ${region.name}`}</div>
        <div>{`code: ${region.code}`}</div>
        <div><Link to={`/regions/${region.name.toLowerCase()}/games`}>GAMES</Link></div>
        <div><Link to="/regions">BACK</Link></div>
      </div>
    )
  }
}

export default Regions
