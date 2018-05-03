import React from 'react'
import gql from 'graphql-tag'
import {
  Query,
} from 'react-apollo'

import Region from './Region'

const GET_REGION = gql`
  query region($regionCode: RegionCode!) {
    region(code: $regionCode) {
      name
      code
    }
  }
`

export default (props) => (
  <Query
    query={GET_REGION}
    variables={{
       regionCode: props.match.params.regionCode.toUpperCase(), //eslint-disable-line
      }}
  >
    {
        ({
          loading,
          error,
          data,
        }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

          return <Region region={data.region} />
        }
      }
  </Query>
)
