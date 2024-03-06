import React from "react"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return (
    <div className="home" data-testid="home">
      <div className="home-container">
        <div className="home-details">
          <h2 className="home-details-heading">Introducing SpaceX Launch Monitor</h2>
          <p className="home-details-paragraph" data-testid="home-details-paragraph">
            This application is designed for monitoring publicly shared launch data from SpaceX. Leveraging the power of
            Node.js and Apollo GraphQL, the backend server provides efficient data retrieval and management
            capabilities. Paired with a sleek React TypeScript frontend, users can seamlessly interact with the
            application, accessing real-time updates on SpaceX launches, rocket details, and historical data.
          </p>
          <div className="mt-8">
            <Link to="/launches" className="home-details-link">
              View Launch Data
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
