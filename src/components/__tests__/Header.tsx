import { fireEvent, render, screen, within } from "@testing-library/react"

import Header from "../Header"
import { MemoryRouter } from "react-router"

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
}

describe("Header Component", () => {
  it("shows the header", () => {
    renderComponent()

    const header = screen.getByTestId("header")
    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent("Monitor")
  })

  it("shows the logo", () => {
    renderComponent()

    const logo = screen.getByTestId("header-logo")
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveTextContent("Monitor")
  })

  it("shows the navigation menu with links", () => {
    renderComponent()

    const nav = screen.getByTestId("header-nav")
    expect(nav).toBeInTheDocument()

    const links = within(nav).getAllByRole("link")
    expect(links).toHaveLength(5)
  })

  it("switches between nav menu and header menu with screen width threshold of 1024px", () => {
    renderComponent()

    const menu = screen.getByTestId("header-menu")
    const nav = screen.getByTestId("header-nav")
    expect(menu).toHaveClass("flex lg:hidden")
    expect(nav).toHaveClass("hidden lg:flex")
  })

  it("shows header menu toggle", () => {
    renderComponent()

    const toggle = screen.getByTestId("header-menu-toggle")
    expect(toggle).toBeInTheDocument()
  })

  it("shows the header menu with links when clicked on the toggle", () => {
    renderComponent()

    const toggle = screen.getByTestId("header-menu-toggle")
    fireEvent.click(toggle)

    const menu = screen.getByTestId("header-menu")
    expect(menu).toBeInTheDocument()

    const links = within(menu).getAllByRole("link")
    expect(links).toHaveLength(5)
  })
})
