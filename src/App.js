import React, { Component } from 'react'
import './App.css'
import LifecycleA from './components/LifecycleA';
import  ParentComp  from './components/ParentComp'
class App extends Component {
  render() {
  return (
    <div className="App">
      <ParentComp />
      {/* < LifecycleA /> */}
      
    </div>
  )
}
}

export default App;
