import React, { useEffect, useRef, useState } from "react"
import { Launch, QueryResponse } from "../../types"
import { useQuery } from "@apollo/client"
import { GET_LAUNCHES } from "../../queries"
import { useInView } from "react-intersection-observer"
import LaunchList from "./LaunchList"
import { sortOptions, successOptions, timeOptions } from "../../constants"
import LaunchFilters from "./LaunchFilters"
import { getQueryVariables } from "../../utilities"
import { FilterOutline, Search } from "heroicons-react"
import FiltersModal from "./FilterModal"
import { useDidUpdateEffect } from "../../hooks"

const Launches: React.FC = () => {
  const [successFilter, setSuccessFilter] = useState(successOptions[0])
  const [filtersModalOpen, setFiltersModalOpen] = useState(false)
  const [timeFilter, setTimeFilter] = useState(timeOptions[0])
  const [sort, setSort] = useState(sortOptions[0])
  const [searchText, setSearchText] = useState("")
  const [launchData, setLaunchData] = useState<Launch[]>([])
  const scrollReady = useRef(false)
  const { ref, inView } = useInView({ threshold: 0.1 })

  const { loading, data, refetch } = useQuery<QueryResponse>(GET_LAUNCHES, {
    variables: getQueryVariables(successFilter, timeFilter, sort, searchText)
  })

  useEffect(() => {
    if (data?.launches?.results) {
      setLaunchData((launchData) => [...launchData, ...data.launches.results])
      scrollReady.current = true
    }
  }, [data])

  useDidUpdateEffect(() => {
    refetch(getQueryVariables(successFilter, timeFilter, sort, searchText)).then((response) => {
      setLaunchData(response.data.launches.results)
    })
  }, [sort.value.key, sort.value.value, timeFilter.value, successFilter.value])

  useDidUpdateEffect(() => {
    const timeoutId = setTimeout(() => {
      refetch(getQueryVariables(successFilter, timeFilter, sort, searchText)).then((response) => {
        setLaunchData(response.data.launches.results)
      })
    }, 750)
    return () => clearTimeout(timeoutId)
  }, [searchText])

  useEffect(() => {
    if (inView && data) {
      const vars = getQueryVariables(successFilter, timeFilter, sort, searchText)
      refetch({ ...vars, options: { ...vars.options, offset: data.launches.page * 10 } }).then()
    }
  }, [inView])

  return (
    <>
      <div className="launches" data-testid="launches">
        <div className="launches-heading">Launches</div>
        <div className="launches-inner">
          <LaunchFilters
            successFilterState={[successFilter, setSuccessFilter]}
            timeFilterState={[timeFilter, setTimeFilter]}
            sortState={[sort, setSort]}
          />
          <div className="launch-filter-placeholder" />
          <div className="launch-list overflow-hidden">
            <div className="launch-search">
              <div className="filter-toggle mr-4 border-r border-secondary flex lg:hidden">
                <FilterOutline className={"text-bright mr-4 mt-[2px]"} onClick={() => setFiltersModalOpen(true)} />
                {filtersModalOpen && (
                  <FiltersModal
                    successFilterState={[successFilter, setSuccessFilter]}
                    timeFilterState={[timeFilter, setTimeFilter]}
                    sortState={[sort, setSort]}
                    onClose={() => setFiltersModalOpen(false)}
                  />
                )}
              </div>
              <div className="launch-search-inner">
                <label htmlFor="search-input" className="mt-[2px]">
                  <Search />
                </label>
                <input
                  id="search-input"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search Lauches"
                  className="search-input"
                />
              </div>
            </div>
            <div className="launch-cards overflow-hidden">
              {!loading && <LaunchList launches={launchData} />}
              {scrollReady.current &&
                (!data ||
                  (data.launches.hasNextPage && (
                    <div className="loading-card flex justify-center" ref={ref}>
                      <p className="text-bright text-lg">Loading...</p>
                    </div>
                  )))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Launches
