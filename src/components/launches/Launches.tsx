import React, { useEffect, useRef, useState } from "react"
import { Launch, QueryResponse } from "../../types"
import { DateTime } from "luxon"
import LaunchDetailsModal from "./LaunchDetailsModal"
import LaunchAttribute from "./LaunchAttribute"
import { useQuery } from "@apollo/client"
import { GET_LAUNCHES } from "../../queries"
import { useInView } from "react-intersection-observer"

const Launches: React.FC = () => {
  const [filters, setFilters] = useState()
  const [options, setOptions] = useState()
  const [modalOpen, setModalOpen] = useState(false)
  const modalLaunch = useRef<Launch>()

  const [launchData, setLaunchData] = useState<Launch[]>([])
  const { ref, inView } = useInView({ threshold: 0.1 })
  const { loading, data, refetch } = useQuery<QueryResponse>(GET_LAUNCHES, {
    variables: {
      queryJSON: "{}",
      options: {
        sort: {
          name: 1
        },
        limit: 10,
        offset: 0
      }
    }
  })

  useEffect(() => {
    if (data?.launches?.results) {
      setLaunchData((launchData) => [...launchData, ...data.launches.results])
    }
  }, [data])

  useEffect(() => {
    if (inView && data) {
      refetch({
        queryJSON: "{}",
        options: {
          sort: {
            name: 1
          },
          limit: 10,
          offset: data.launches.page * 10
        }
      })
    }
  }, [inView])

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
              {!loading &&
                launchData.map((launch, idx) => (
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
              {!data ||
                (data.launches.hasNextPage && (
                  <div className="loading-card" ref={ref}>
                    Loading
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
