import React, { ReactNode } from "react"

const LaunchAttribute: React.FC<{ name: ReactNode; value: ReactNode }> = ({ name, value }) => {
  return (
    <div className="launch-attribute" data-testid="launch-attribute">
      <div className="launch-attribute-name">{name} :</div>
      <div className="launch-attribute-value">{value}</div>
    </div>
  )
}

export default LaunchAttribute
