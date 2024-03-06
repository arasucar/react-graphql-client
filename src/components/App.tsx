import React from "react"
import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"
import { Outlet, Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"

const BasicLayout: React.FC = () => {
  return (
    <div className="app" data-testid="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
