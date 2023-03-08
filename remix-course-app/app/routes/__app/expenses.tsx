import { Link, Outlet } from "@remix-run/react"
import { FaPlus, FaDownload } from 'react-icons/fa';

import ExpenseList from "~/components/expenses/ExpensesList"

import { DUMMY_EXPENSES } from "~/mockup/mockup"


export default function Expenses() {
  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add Expense</span>
          </Link>
        </section>
        <ExpenseList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  )
}