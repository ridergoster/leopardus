import React from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import {
  Route,
  Switch,
} from 'react-router-dom'

import Home from 'views/home'

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <main>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    )
  }
}

export default App
