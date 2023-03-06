import { Outlet } from "@remix-run/react"
import ExpenseList from "~/components/expenses/ExpensesList"

import expensesStyles from "~/styles/expenses.css"
import { DUMMY_EXPENSES } from "~/mockup/mockup"

export const links = () => {
  return [{ rel: 'stylesheet', href: expensesStyles}]
}

export default function Expenses() {
  return (
    <>
      <Outlet />
      <main>
        <ExpenseList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  )
}
