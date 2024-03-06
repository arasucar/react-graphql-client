import "../css/header-menu.css"
import logo from "../img/logo.svg"
import React, { useState } from "react"
import { NavItem } from "../types"

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems: NavItem[] = [
    { name: "Launches", href: "#" },
    { name: "Rockets", href: "#" },
    { name: "Crew", href: "#" },
    { name: "Starship", href: "#" },
    { name: "Rideshare", href: "#" }
  ]

  return (
    <div className="header" data-testid="header">
      <div className="header-container">
        <div className="logo" data-testid="header-logo">
          <img src={logo} alt="logo" />
          <p className="logo-text">Monitor</p>
        </div>
        <div className="nav-items hidden lg:flex" data-testid={"header-nav"}>
          {navItems.map((navItem) => (
            <a href={navItem.href} className="nav-item" key={navItem.name}>
              {navItem.name}
            </a>
          ))}
        </div>
        <div className="flex lg:hidden" data-testid="header-menu">
          <input
            type="checkbox"
            className="open-header-menu"
            id="open-header-menu"
            checked={menuOpen}
            onChange={() => setMenuOpen((open) => !open)}
          />
          <label htmlFor="open-header-menu" className="header-menu-toggle" data-testid="header-menu-toggle">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
          </label>
          {menuOpen && (
            <div className="sidebar-menu">
              <ul className="sidebar-menu-inner">
                {navItems.map((navItem) => (
                  <li key={navItem.name}>
                    <a href={navItem.href} className="nav-item" key={navItem.name}>
                      {navItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
