import React from "react"
import logo from "../img/logo.svg"
import "../css/App.css"
import Header from "./Header"

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Launch Statistics coming soon...</p>
    </div>
  )
}

export default App
