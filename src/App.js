import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navigation from './components/Navigation/Navigation'
import { Switch, Route } from 'react-router-dom'




const App = () => {
  return (
    <div >
      <Navigation />

      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/aboutpage" >
          <About />
        </Route>
      </Switch>





    </div>
  )
}

export default App