import React from "react"

const Footer: React.FC = () => {
  return (
    <div className="footer" data-testid="footer">
      <div data-testid="footer-author">Aras Ucar @ 2024</div>
      <div data-testid="footer-privacy">Privacy Policy</div>
      <div data-testid="footer-disclaimer">Disclaimer</div>
    </div>
  )
}

export default Footer
