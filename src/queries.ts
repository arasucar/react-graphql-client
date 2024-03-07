import { gql } from "@apollo/client"

export const GET_LAUNCHES = gql`
  query Launches($queryJSON: String, $options: OptionsInput) {
    launches(queryJSON: $queryJSON, options: $options) {
      results {
        id
        name
        details
        flightNumber
        date
        upcoming
        success
        recovered
        failures {
          reason
        }
        rocket {
          id
          company
          country
          name
          description
          wikipedia
          images
        }
        links {
          images
          patch
          wikipedia
        }
      }
      totalCount
      totalPages
      page
      hasNextPage
    }
  }
`
