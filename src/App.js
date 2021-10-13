import React from 'react';
import './App.css';
import {  Switch, Route, BrowserRouter} from 'react-router-dom';
import Admin from './components/Admin';
import Login from './components/Login';
import Logout from './components/Logout';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route  path='/admin' component={Admin} />
      <Route  path='/logout' component={Logout} />
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
