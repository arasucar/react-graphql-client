import { render, screen } from "@testing-library/react"
import React from "react"
import Footer from "./Footer"

describe("Footer Component", () => {
  it("shows footer", () => {
    render(<Footer />)

    const footer = screen.getByTestId("footer")
    expect(footer).toBeInTheDocument()
  })

  it("shows author", () => {
    render(<Footer />)

    const author = screen.getByTestId("footer-author")
    expect(author).toBeInTheDocument()
    expect(author).toHaveTextContent("Aras Ucar @ 2024")
  })

  it("shows privacy policy", () => {
    render(<Footer />)

    const author = screen.getByTestId("footer-privacy")
    expect(author).toBeInTheDocument()
    expect(author).toHaveTextContent("Privacy Policy")
  })

  it("shows disclaimer", () => {
    render(<Footer />)

    const author = screen.getByTestId("footer-disclaimer")
    expect(author).toBeInTheDocument()
    expect(author).toHaveTextContent("Disclaimer")
  })
})
