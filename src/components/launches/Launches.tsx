import React, { useRef, useState } from "react"
import { Launch } from "../../types"
import json from "./ExampleQuery.json"
import { DateTime } from "luxon"
import LaunchDetailsModal from "./LaunchDetailsModal"
import LaunchAttribute from "./LaunchAttribute"

const Launches: React.FC = () => {
  const launches: Launch[] = json
  const [modalOpen, setModalOpen] = useState(false)
  const modalLaunch = useRef<Launch>()

  const handleCardClick = (launch: Launch) => {
    modalLaunch.current = launch
    setModalOpen(true)
  }

  return (
    <>
      <div className="launches" data-testid="launches">
        <div className="launches-heading">Launches</div>
        <div className="launches-inner">
          <div className="launch-filters">
            <div className="launch-filters-heading">Filter Launches</div>
          </div>
          <div className="launch-filter-placeholder" />
          <div className="launch-list overflow-hidden">
            <div className="launch-search"></div>
            <div className="launch-cards overflow-hidden">
              {launches.map((launch, idx) => (
                <div className="launch-card" onClick={() => handleCardClick(launch)} key={idx}>
                  <img src={launch.links.patch} alt="launch_patch" className="launch-card-patch" />
                  <div className="launch-attributes">
                    <LaunchAttribute name={"Name"} value={launch.name} />
                    <LaunchAttribute
                      name={"Date"}
                      value={launch.upcoming ? "Upcoming" : DateTime.fromISO(launch.date).toFormat("dd LLL, yyyy")}
                    />
                    <LaunchAttribute name={"Flight"} value={launch.flightNumber} />
                  </div>
                  <div className="launch-attributes">
                    <LaunchAttribute name={"Rocket"} value={launch.rocket.name} />
                    <LaunchAttribute name={"Successful"} value={launch.success ? "Yes" : "No"} />
                    <LaunchAttribute
                      name={"Recovered"}
                      value={launch.success ? "-" : launch.recovered ? "Yes" : "No"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <LaunchDetailsModal launch={modalLaunch.current!} onClose={() => setModalOpen(false)} />}
    </>
  )
}

export default Launches
