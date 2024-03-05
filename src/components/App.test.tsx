import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders coming soon text", () => {
  render(<App />)
  const textElement = screen.getByText("Launch Statistics coming soon...")
  expect(textElement).toBeInTheDocument()
})
