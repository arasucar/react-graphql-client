import { Launch } from "../../types"
import LaunchAttribute from "./LaunchAttribute"
import { DateTime } from "luxon"
import React, { useRef, useState } from "react"
import LaunchDetailsModal from "./LaunchDetailsModal"

const LaunchList: React.FC<{ launches: Launch[] }> = ({ launches }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const modalLaunch = useRef<Launch>()

  const handleCardClick = (launch: Launch) => {
    modalLaunch.current = launch
    setModalOpen(true)
  }

  return (
    <div data-testid="launch-list">
      {launches.map((launch, idx) => (
        <div className="launch-card" data-testid="launch-card" onClick={() => handleCardClick(launch)} key={idx}>
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
            <LaunchAttribute name={"Recovered"} value={launch.success ? "-" : launch.recovered ? "Yes" : "No"} />
          </div>
        </div>
      ))}
      {modalOpen && <LaunchDetailsModal launch={modalLaunch.current!} onClose={() => setModalOpen(false)} />}
    </div>
  )
}

export default LaunchList
