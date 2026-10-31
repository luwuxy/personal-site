import './Navbar.css'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="inner-nav">
        <h3>celsi</h3>
        <ul className="nav-links">
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/projects">projects</Link></li>
        </ul>
      </div>
    </header>
  )
}