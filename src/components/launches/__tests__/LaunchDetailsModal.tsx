import { render, screen } from "@testing-library/react"
import LaunchDetailsModal from "../LaunchDetailsModal"

const launch = {
  id: "5eb87cf8ffd86e000604b348",
  name: "ABS-2A / Eutelsat 117W B",
  details:
    "One year after pioneering this technique on flight 16, Falcon again launched two Boeing 702SP gridded ion thruster satellites in a dual-stack configuration, with the two customers sharing the rocket and mission costs. First stage landing attempt on drone ship failed on landing due to low thrust on one of the three landing engines.",
  flightNumber: 31,
  date: "2016-06-15T14:29:00.000Z",
  upcoming: false,
  success: true,
  recovered: false,
  failures: [],
  rocket: {
    id: "5e9d0d95eda69973a809d1ec",
    company: "SpaceX",
    country: "United States",
    name: "Falcon 9",
    description:
      "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
    wikipedia: "https://en.wikipedia.org/wiki/Falcon_9",
    images: [
      "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
      "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg",
      "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg",
      "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg",
      "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg",
      "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg"
    ]
  },
  links: {
    images: [
      "https://farm8.staticflickr.com/7088/27661326426_ce3c3f320d_o.jpg",
      "https://farm8.staticflickr.com/7698/27661325446_affb08be24_o.jpg",
      "https://farm8.staticflickr.com/7733/27661322976_073466e80c_o.jpg",
      "https://farm8.staticflickr.com/7218/27661320706_4c16f3b76b_o.jpg",
      "https://farm8.staticflickr.com/7340/27661315686_6dcb2ce6f9_o.jpg",
      "https://farm8.staticflickr.com/7656/27661313956_e1ac9650b9_o.jpg",
      "https://farm8.staticflickr.com/7616/27661312516_640764f8fd_o.jpg",
      "https://farm8.staticflickr.com/7413/27078893234_0142dd80f0_o.jpg",
      "https://farm8.staticflickr.com/7334/27078889924_8819fd55ea_o.jpg"
    ],
    patch: "https://images2.imgbox.com/c6/d2/MIC8sIE4_o.png",
    wikipedia: "https://en.wikipedia.org/wiki/ABS_(satellite_operator)"
  }
}

const spyOnClose = jest.fn()

const renderComponent = () => render(<LaunchDetailsModal launch={launch} onClose={spyOnClose} />)

describe("Launch Attributes Modal", () => {
  it("shows modal and it's contents", () => {
    renderComponent()

    const modal = screen.getByTestId("launch-modal-container")
    expect(modal).toBeInTheDocument()
  })
})
