import React from 'react'
import styled from 'styled-components'

const HomeTitle = styled.div`
  color: blue;
  font-size: 32px;
`

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <HomeTitle>This is HOME</HomeTitle>
      </div>
    )
  }
}

export default Home
