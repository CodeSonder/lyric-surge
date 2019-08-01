import React from 'react'
import Header from './components/Header'
import Images from './components/MainImages'
import SideBar from './components/Main'
import {Route, Switch} from 'react-router-dom'
import Quotes from './components/QuoteList'


import './App.css'







function App() {
  
  return (
    <div>

      <Header></Header>
      <Images></Images>
      <Switch>
          <Route exact path ='/quotes' render={()=> <Quotes />} />
      <SideBar></SideBar>

      </Switch>

      
    </div>
  )

}

    

export default App
        


     
      

















