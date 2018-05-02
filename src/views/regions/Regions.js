import React from 'react'
import {
  Link,
} from 'react-router-dom'
import PropTypes from 'prop-types'

import RegionCard from 'components/regionCard'

class Regions extends React.PureComponent {
  static propTypes = {
    regions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }

  render() {
    const {
      regions,
    } = this.props

    return (
      <div>
        {
          regions.map((region, i) => (
            <RegionCard key={`region-${i}`} region={region} /> // eslint-disable-line
          ))
        }
        <Link to="/">BACK</Link>
      </div>
    )
  }
}

export default Regions
