import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App Component", () => {
  it("renders app container", () => {
    render(<App />)
    const app = screen.getByTestId("app")
    expect(app).toBeInTheDocument()
  })
})
