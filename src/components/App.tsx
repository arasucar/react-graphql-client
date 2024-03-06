import React from "react"
import Header from "./Header"
import Home from "./Home"

const App: React.FC = () => {
  return (
    <div className="app" data-testid="app">
      <Header />
      <Home />
    </div>
  )
}

export default App
