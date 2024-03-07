import { Dialog } from "@headlessui/react"
import React from "react"
import LaunchFilters from "./LaunchFilters"
import { SelectOption } from "../../types"
import { X } from "heroicons-react"
const FiltersModal: React.FC<{
  successFilterState: [SelectOption, (option: SelectOption) => void]
  timeFilterState: [SelectOption, (option: SelectOption) => void]
  sortState: [SelectOption, (option: SelectOption) => void]
  onClose: () => void
}> = (props) => {
  return (
    <Dialog as="div" className="relative z-10" open onClose={props.onClose}>
      <div className="fixed inset-0 bg-black/25" />
      <div className="fixed inset-0 overflow-y-auto">
        <div
          className="filter-modal-container text-bright"
          data-testid={"filter-modal-container"}
          onClick={props.onClose}
        >
          <div className="filter-modal-body pt-2 gap-2" onClick={(e) => e.stopPropagation()}>
            <X className="h-4 cursor-pointer float-end mr-2" onClick={props.onClose} />
            <LaunchFilters {...props} />
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default FiltersModal
