import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from './helpers/history'
import GeneratorPage from './pages/GeneratorPage'

const Routes: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/">
          <GeneratorPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
