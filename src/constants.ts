import { SelectOption } from "./types"

export const successOptions: SelectOption[] = [
  { label: "All", value: null },
  { label: "Successful", value: true },
  { label: "Failure", value: false }
]

export const timeOptions: SelectOption[] = [
  { label: "All", value: null },
  { label: "Past", value: "Past" },
  { label: "Future", value: "Future" }
]

export const sortOptions = [
  { label: "Name Asc", value: { key: "name", value: 1 } },
  { label: "Name Desc", value: { key: "name", value: -1 } },
  { label: "Date Asc", value: { key: "date_utc", value: 1 } },
  { label: "Date Desc", value: { key: "date_utc", value: -1 } },
  { label: "Flight Number Asc", value: { key: "flight_number", value: 1 } },
  { label: "Flight Number Desc", value: { key: "flight_number", value: -1 } }
]
