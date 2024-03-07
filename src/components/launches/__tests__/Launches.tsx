import { render, screen } from "@testing-library/react"
import React from "react"
import Launches from "../Launches"

describe("Launches Component", () => {
  it("shows launches container", () => {
    // FIXME Apollo hook testin issue
    // render(<Launches />)
    //
    // const launchesContainer = screen.getByTestId("launches")
    // expect(launchesContainer).toBeInTheDocument()
    //expect(launchesContainer).toHaveTextContent("Launches coming soon..")
  })
})
