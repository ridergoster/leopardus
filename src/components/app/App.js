import React from 'react'
import ApolloClient from 'apollo-boost'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import {
  ApolloProvider,
} from 'react-apollo'
import {
  InMemoryCache,
} from 'apollo-cache-inmemory'
import {
  HttpLink,
} from 'apollo-link-http'
import {
  Route,
  Switch,
} from 'react-router-dom'

import Home from 'views/home'
import Regions from 'views/regions'
import Region from 'views/regions/region'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),  // eslint-disable-line
  link: new HttpLink(),
  ssrForceFetchDelay: 100,
})

class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <main>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/regions" component={Regions} />
                <Route path="/regions/:regionCode" component={Region} />
              </Switch>
            </div>
          </main>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App
