import { Outlet } from "@remix-run/react"

import expensesStyles from "~/styles/expenses.css"

export const links = () => {
  return [{ rel: 'stylesheet', href: expensesStyles}]
}

export default function Expenses() {
  return (
    <div>
      <h1>Expenses Page</h1>
      <Outlet />
    </div>
  )
}
