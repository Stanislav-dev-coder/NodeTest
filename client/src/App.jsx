import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Home } from './pages/Home.jsx' 
import { About } from './pages/About.jsx' 
import { Nav } from './components/Nav.jsx'

const App = ({ history }) => {




  return (
    <div className='app'>
      <Nav></Nav>
      <Switch>
        <Route history={history} path='/home' component={Home} />
        <Route history={history} path='/about' component={About} />
        <Redirect from='/' to='/home' />
      </Switch>
    </div>
  );
}

export default withRouter(App)