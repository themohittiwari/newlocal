import React, { Component } from 'react'
import Navigation from './Components/Navigation/Navigation';
import Register from './Components/Register/Register';
import RegisteredBuss from './Components/RegisteredBuss/RegisteredBuss';
import Home from './Components/Home/Home';
import { BrowserRouter,Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Navigation />
          <Route path='/register' exact component={Register} />
          <Route path='/home' exact component={Home} />
          <Route path='/registered' exact component={RegisteredBuss} />
        </BrowserRouter>
    )
  }
}
const mapstatetoprops = state=>({
  business : state
})
export default connect(mapstatetoprops)(App)