import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Name = styled.div`
  font-size: 20px;
  color: blue;
`
const Code = styled.div`
  font-size: 14px;
  color: violet;
`

class RegionCard extends React.PureComponent {
  static propTypes = {
    region: PropTypes.shape({}).isRequired,
  }

  render() {
    const {
      region,
    } = this.props

    return (
      <div>
        <Name>{`name: ${region.name}`}</Name>
        <Code>{`code: ${region.code}`}</Code>
      </div>
    )
  }
}

export default RegionCard
