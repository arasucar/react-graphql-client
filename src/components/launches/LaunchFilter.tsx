import React from "react"
import { SelectOption } from "../../types"
import { Listbox } from "@headlessui/react"

const LaunchFilter: React.FC<{
  title: string
  options: SelectOption[]
  selectedOption: SelectOption
  selectOption: (option: SelectOption) => void
}> = ({ title, options, selectedOption, selectOption }) => {
  return (
    <div className="launch-filter px-4 mt-4">
      <div className="filter-heading">{title}</div>
      <Listbox value={selectedOption} onChange={selectOption}>
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-secondary py-2 pl-3 pr-10 text-left shadow-md sm:text-sm mt-2">
          {selectedOption.label}
        </Listbox.Button>
        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-secondary py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-50">
          {options.map((option, i) => (
            <Listbox.Option
              className="relative cursor-default select-none py-2 pl-10 pr-4"
              key={i}
              value={option}
              disabled={selectedOption === option}
            >
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
export default LaunchFilter
