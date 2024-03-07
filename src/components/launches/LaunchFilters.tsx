import React from "react"
import { SelectOption } from "../../types"
import LaunchFilter from "./LaunchFilter"
import { sortOptions, successOptions, timeOptions } from "../../constants"

const LaunchFilters: React.FC<{
  successFilterState: [SelectOption, (option: SelectOption) => void]
  timeFilterState: [SelectOption, (option: SelectOption) => void]
  sortState: [SelectOption, (option: SelectOption) => void]
}> = ({ successFilterState, timeFilterState, sortState }) => {
  return (
    <div className="launch-filters">
      <div className="launch-filters-heading">Filter & Sort</div>
      <div className="launch-filters-list">
        <LaunchFilter
          title={"Success"}
          options={successOptions}
          selectedOption={successFilterState[0]}
          selectOption={successFilterState[1]}
        />
        <LaunchFilter
          title={"Time"}
          options={timeOptions}
          selectedOption={timeFilterState[0]}
          selectOption={timeFilterState[1]}
        />
        <LaunchFilter title={"Sort"} options={sortOptions} selectedOption={sortState[0]} selectOption={sortState[1]} />
      </div>
    </div>
  )
}
export default LaunchFilters
