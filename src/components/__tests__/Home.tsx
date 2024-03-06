import { render, screen } from "@testing-library/react"
import React from "react"
import Home from "../Home"

describe("Home Component", () => {
  it("shows heading", () => {
    render(<Home />)

    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("Introducing SpaceX Launch Monitor")
  })

  it("shows details paragraph", () => {
    render(<Home />)

    const paragraph = screen.getByTestId("home-details-paragraph")
    expect(paragraph).toBeInTheDocument()
  })

  it("shows a link", () => {
    render(<Home />)

    const link = screen.getByRole("link")
    expect(link).toBeInTheDocument()
    expect(link).toHaveTextContent("View Launch Data")
  })
})
