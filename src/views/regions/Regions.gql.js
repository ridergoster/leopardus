import React from 'react'
import {
  Query,
} from 'react-apollo'

import Regions from './Regions'
import query from './Regions.graphql'

export default (props) => (
  <Query
    query={query}
    variables={{
       regionCode: props.match.params.regionCode, //eslint-disable-line
      }}
  >
    {
      ({
        loading,
        error,
        data: {
         regions,
        },
      }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return <Regions regions={regions} />
      }
    }
  </Query>
)
