import { fireEvent, render, screen, within } from "@testing-library/react"
import LaunchList from "../LaunchList"

const launches = [
  {
    id: "5eb87cf8ffd86e000604b348",
    name: "ABS-2A / Eutelsat 117W B",
    details:
      "One year after pioneering this technique on flight 16, Falcon again launched two Boeing 702SP gridded ion thruster satellites in a dual-stack configuration, with the two customers sharing the rocket and mission costs. First stage landing attempt on drone ship failed on landing due to low thrust on one of the three landing engines.",
    flightNumber: 31,
    date: "2016-06-15T14:29:00.000Z",
    upcoming: false,
    success: false,
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
  },
  {
    id: "5eb87ceaffd86e000604b33e",
    name: "ABS-3A / Eutelsat 115W B",
    details:
      "The launch was Boeing's first-ever conjoined launch of a lighter-weight dual-commsat stack that was specifically designed to take advantage of the lower-cost SpaceX Falcon 9 launch vehicle. Per satellite, launch costs were less than $30 million. The ABS satellite reached its final destination ahead of schedule and started operations on September 10.",
    flightNumber: 21,
    date: "2015-03-02T03:50:00.000Z",
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
        "https://farm9.staticflickr.com/8749/16788442562_ed460c2d9e_o.jpg",
        "https://farm9.staticflickr.com/8586/16510243060_48d6a9b1f6_o.jpg",
        "https://farm9.staticflickr.com/8641/16490359747_c043b8c61a_o.jpg",
        "https://farm9.staticflickr.com/8636/16510241270_ca83157509_o.jpg",
        "https://farm8.staticflickr.com/7618/16601658850_13b826e705_o.jpg",
        "https://farm9.staticflickr.com/8617/16510041628_883af57512_o.jpg"
      ],
      patch: "https://images2.imgbox.com/3f/c9/ZczpJ97M_o.png",
      wikipedia: "https://en.wikipedia.org/wiki/ABS-3A"
    }
  },
  {
    id: "5eb87d50ffd86e000604b394",
    name: "ANASIS-II",
    details:
      "SpaceX will launch ANASIS-II, a South Korean geostationary military communication satellite from LC-39A, Kennedy Space Center. It will be South Korea's first dedicated military communications satellite. Falcon 9 will deliver the satellite to a geostationary transfer orbit. The booster is expected to land downrange on an ASDS.",
    flightNumber: 98,
    date: "2020-07-20T21:30:00.000Z",
    upcoming: false,
    success: true,
    recovered: true,
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
        "https://live.staticflickr.com/65535/50136967628_eda99b6353_o.jpg",
        "https://live.staticflickr.com/65535/50137510881_4618ba6c84_o.jpg",
        "https://live.staticflickr.com/65535/50136967553_e1ac93fab0_o.jpg",
        "https://live.staticflickr.com/65535/50136967658_9347d7c575_o.jpg"
      ],
      patch: "https://images2.imgbox.com/d4/0b/QdfjLsV3_o.png",
      wikipedia: null
    }
  },
  {
    id: "5eb87d37ffd86e000604b37c",
    name: "Amos-17",
    details:
      "SpaceX will launch Boeing built Amos-17, a geostationary communications satellite for Israeli company Spacecom. The satellite will be delivered to GTO from KSC LC-39A or possibly CCAFS SLC-40, and will replace the defunct Amos-5 at 17° E. Amos-17 carries multi-band high throughput and regional beams servicing Africa, Europe and the Middle East. The cost of this launch is covered for Spacecom by SpaceX credit following the Amos-6 incident. A recovery of the booster for this mission is not expected.",
    flightNumber: 83,
    date: "2019-08-06T22:52:00.000Z",
    upcoming: false,
    success: true,
    recovered: true,
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
        "https://live.staticflickr.com/65535/48478269312_58dd3dc446_o.jpg",
        "https://live.staticflickr.com/65535/48478269747_353dcb2e62_o.jpg",
        "https://live.staticflickr.com/65535/48478119901_2de0441026_o.jpg",
        "https://live.staticflickr.com/65535/48478120646_ab72c2c6c3_o.jpg",
        "https://live.staticflickr.com/65535/48478120031_5aae1f6131_o.jpg",
        "https://live.staticflickr.com/65535/48478269442_08479bed36_o.jpg"
      ],
      patch: "https://images2.imgbox.com/9e/6f/oaYZfAoF_o.png",
      wikipedia: "https://en.wikipedia.org/wiki/Spacecom"
    }
  }
]

describe("Launch List Component", () => {
  it("shows list of launch cards", () => {
    render(<LaunchList launches={launches} />)

    const list = screen.getByTestId("launch-list")
    expect(list).toBeInTheDocument()

    const launchCards = within(list).getAllByTestId("launch-card")
    expect(launchCards).toHaveLength(4)
  })

  it("shows launch cards that display launch attributes", () => {
    render(<LaunchList launches={launches} />)

    const launchCards = screen.getAllByTestId("launch-card")
    const attributes = within(launchCards[0]).getAllByTestId("launch-attribute")
    expect(attributes).toHaveLength(6)
  })

  it("shows launch cards that display launch name", () => {
    render(<LaunchList launches={launches} />)

    const launchCards = screen.getAllByTestId("launch-card")
    const attributes = within(launchCards[0]).getAllByTestId("launch-attribute")
    expect(attributes[0]).toHaveTextContent("ABS-2A / Eutelsat 117W B")
  })

  it("shows launch cards that display formatted launch date", () => {
    render(<LaunchList launches={launches} />)

    const launchCards = screen.getAllByTestId("launch-card")
    const attributes = within(launchCards[0]).getAllByTestId("launch-attribute")
    expect(attributes[1]).toHaveTextContent("15 Jun, 2016")
  })

  it("shows launch cards that display flight number", () => {
    render(<LaunchList launches={launches} />)

    const launchCards = screen.getAllByTestId("launch-card")
    const attributes = within(launchCards[0]).getAllByTestId("launch-attribute")
    expect(attributes[2]).toHaveTextContent("31")
  })

  it("shows launch cards that display rocket name", () => {
    render(<LaunchList launches={launches} />)

    const launchCards = screen.getAllByTestId("launch-card")
    const attributes = within(launchCards[0]).getAllByTestId("launch-attribute")
    expect(attributes[3]).toHaveTextContent("Falcon 9")
  })

  it("shows launch cards that display launch success", () => {
    render(<LaunchList launches={launches} />)

    const launchCards = screen.getAllByTestId("launch-card")
    const attributes = within(launchCards[0]).getAllByTestId("launch-attribute")
    expect(attributes[4]).toHaveTextContent("No")
  })

  it("shows launch cards that display launch recovered data", () => {
    render(<LaunchList launches={launches} />)

    const launchCards = screen.getAllByTestId("launch-card")
    const attributes = within(launchCards[0]).getAllByTestId("launch-attribute")
    expect(attributes[5]).toHaveTextContent("No")
  })

  it("shows launch launch detail modal when clicked on launch cards", async () => {
    render(<LaunchList launches={launches} />)

    const launchCards = screen.getAllByTestId("launch-card")
    fireEvent.click(launchCards[0])

    const launchDetailsModal = await screen.findByTestId("launch-modal-container")
    expect(launchDetailsModal).toBeInTheDocument()
  })
})
