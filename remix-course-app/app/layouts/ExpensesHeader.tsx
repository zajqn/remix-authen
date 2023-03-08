import { Link, NavLink } from "@remix-run/react"

const ExpensesHeader = () => {
  return (
    <header id="main-header">
      <h1 id="logo">
        <Link to="/">Remix Expenses</Link>
      </h1>
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/expenses" end>
              Manage Expenses
            </NavLink>
          </li>
          <li>
            <NavLink to="/expenses/analysis">Analyze Expenses</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <button className="cta">Logout</button>
      </nav>
    </header>
  )
}

export default ExpensesHeader