import { Link, NavLink } from "@remix-run/react"

const Navigation = () => {
  return (
    <header id="main-header">
      <h1 id="logo">
        <Link to="/">Remix Expenses</Link>
      </h1>
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          {/* <li>
            <NavLink to="/expenses">Expenses</NavLink>
          </li> */}
          <li className="dropdown">
            <NavLink to="/expenses" className="dropbtn">Expenses</NavLink>
            <nav className="dropdown-content">
              <NavLink to="/expenses/analysis">Analysis</NavLink>
              <NavLink to="/expenses/overview">Overview</NavLink>
            </nav>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
            <Link to="/auth" className="cta">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation