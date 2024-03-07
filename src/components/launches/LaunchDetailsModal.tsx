import { Dialog } from "@headlessui/react"
import React from "react"
import { X } from "heroicons-react"
import { Launch } from "../../types"
import { DateTime } from "luxon"
import LaunchAttribute from "./LaunchAttribute"

type LaunchDetailsModalProps = {
  launch: Launch
  onClose: () => void
}

const LaunchDetailsModal: React.FC<LaunchDetailsModalProps> = ({ launch, onClose }) => {
  const images = launch.links.images.length > 0 ? launch.links.images : launch.rocket.images

  const wikipediaPageLink = (
    <a href={launch.links.wikipedia || launch.rocket.wikipedia} target="_blank" className="underline">
      Click To See
    </a>
  )
  return (
    <Dialog as="div" className="relative z-10" open onClose={onClose}>
      <div className="fixed inset-0 bg-black/25" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="launch-modal-container" data-testid={"launch-modal-container"} onClick={onClose}>
          <div className="launch-modal-body" onClick={(e) => e.stopPropagation()}>
            <div className="launch-modal-heading" data-testid="launch-modal-heading">
              {launch.name}
              <X className="h-4 mr-[-6px] cursor-pointer" onClick={onClose} />
            </div>
            <div className="p-6">
              <div className="launch-modal-images">
                <img src={launch.links.patch} alt="launch_patch" className="launch-card-patch" />
                {images.map((image, i) => (
                  <img src={image} alt="launch_patch" className="launch-card-patch" key={i} />
                ))}
              </div>
              <div className="launch-modal-detail text-light mb-4">{launch.details}</div>
              <LaunchAttribute
                name={"Date"}
                value={launch.upcoming ? "Upcoming" : DateTime.fromISO(launch.date).toFormat("dd LLL, yyyy")}
              />
              <LaunchAttribute name={"Flight Number"} value={launch.flightNumber} />
              <LaunchAttribute name={"Successful"} value={launch.success ? "Yes" : "No"} />
              <LaunchAttribute name={"Recovered"} value={launch.success ? "-" : launch.recovered ? "Yes" : "No"} />
              <LaunchAttribute name={"Rocket Name"} value={launch.rocket.name} />
              <LaunchAttribute name={"Rocket Company"} value={launch.rocket.company} />
              <LaunchAttribute name={"Rocket Country"} value={launch.rocket.country} />
              <LaunchAttribute name={"Wikipedia Page"} value={wikipediaPageLink} />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default LaunchDetailsModal
