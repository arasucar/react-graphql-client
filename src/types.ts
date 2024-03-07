export type NavItem = {
  name: string
  to: string
}

export type Rocket = {
  id: string
  name: string
  description: string
  company: string
  country: string
  wikipedia: string
  images: string[]
}

export type LaunchLinks = {
  images: string[]
  patch: string
  wikipedia: string | null
}

export type LaunchFailures = {
  reason: string
}

export type Launch = {
  id: string
  name: string
  details: string | null
  flightNumber: number
  date: string
  upcoming: boolean
  success: boolean
  recovered: boolean | null
  failures: LaunchFailures[]
  rocket: Rocket
  links: LaunchLinks
}

export type QueryResponse = {
  launches: {
    results: Launch[]
    totalCount: number
    totalPages: number
    page: number
    hasNextPage: boolean
  }
}
