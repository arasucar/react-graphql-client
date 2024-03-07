import "../css/header-menu.css"
import logo from "../img/logo.svg"
import React, { useRef, useState } from "react"
import { NavItem } from "../types"
import { Link } from "react-router-dom"

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLLabelElement>(null)

  const navItems: NavItem[] = [
    { name: "Launches", to: "/launches" },
    { name: "Rockets", to: "#" },
    { name: "Crew", to: "#" },
    { name: "Starship", to: "#" },
    { name: "Rideshare", to: "#" }
  ]

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as Node
    if (!menuRef.current?.contains(target)) {
      e.stopPropagation()
      setMenuOpen(false)
      document.removeEventListener("mousedown", handleOutsideClick, false)
    }
  }

  const handleToggle = () => {
    if (!menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick, false)
    } else {
      document.removeEventListener("mousedown", handleOutsideClick, false)
    }
    setMenuOpen((open) => !open)
  }

  return (
    <div className="header" data-testid="header">
      <div className="header-container">
        <Link to="/" className="logo" data-testid="header-logo">
          <img src={logo} alt="logo" />
          <p className="logo-text">Monitor</p>
        </Link>
        <div className="nav-items hidden lg:flex" data-testid={"header-nav"}>
          {navItems.map((navItem) => (
            <Link to={navItem.to} className="nav-item" key={navItem.name}>
              {navItem.name}
            </Link>
          ))}
        </div>
        <div className="flex lg:hidden" data-testid="header-menu" ref={menuRef}>
          <input
            type="checkbox"
            className="open-header-menu"
            id="open-header-menu"
            checked={menuOpen}
            onChange={handleToggle}
          />
          <label
            htmlFor="open-header-menu"
            className="header-menu-toggle"
            data-testid="header-menu-toggle"
            ref={toggleRef}
          >
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
          </label>
          {menuOpen && (
            <div className="sidebar-menu">
              <ul className="sidebar-menu-inner">
                {navItems.map((navItem) => (
                  <Link to={navItem.to} className="nav-item" key={navItem.name} onClick={() => setMenuOpen(false)}>
                    <li key={navItem.name}>{navItem.name}</li>
                  </Link>
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
