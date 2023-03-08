import { useParams } from "@remix-run/react"

import ExpenseForm from "~/components/expenses/ExpenseForm"

const ExpensesDetail = () => {
  const params = useParams()
  return (
    <>
      <ExpenseForm />
    </>
  )
}

export default ExpensesDetail