import { SelectOption } from "./types"

export const getQueryVariables = (
  successFilter: SelectOption,
  timeFilter: SelectOption,
  sort: SelectOption,
  searchText: string
) => {
  let filterObject = {}
  if (successFilter.value === true || successFilter.value === false) {
    filterObject = { ...filterObject, success: successFilter.value }
  }
  if (timeFilter.value) filterObject = { ...filterObject, upcoming: timeFilter.value === "Future" }
  if (searchText) {
    filterObject = {
      $and: [
        filterObject,
        {
          $or: [
            { name: { $regex: searchText, $options: "i" } },
            { details: { $regex: searchText, $options: "i" } },
            { "rocket.name": { $regex: searchText, $options: "i" } }
          ]
        }
      ]
    }
  }
  const queryJSON = JSON.stringify(filterObject)
  return {
    queryJSON,
    options: {
      sort: {
        [sort.value.key]: sort.value.value
      },
      limit: 10,
      offset: 0
    }
  }
}
