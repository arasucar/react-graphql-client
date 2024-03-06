import React from "react"
import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"

const App: React.FC = () => {
  return (
    <div className="app" data-testid="app">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
