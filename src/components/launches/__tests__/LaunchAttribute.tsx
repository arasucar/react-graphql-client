import { render, screen } from "@testing-library/react"
import LaunchAttribute from "../LaunchAttribute"

describe("Launch Attribute Component", () => {
  it("shows launch attribute name and value", () => {
    const name = "Dummy Name"
    const value = "Dummy Value"
    render(<LaunchAttribute name={name} value={value} />)

    const attribute = screen.getByTestId("launch-attribute")
    expect(attribute).toHaveTextContent(name)
    expect(attribute).toHaveTextContent(value)
  })
})
