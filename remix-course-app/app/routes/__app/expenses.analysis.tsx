import ExpenseChart from "~/components/expenses/ExpenseChart"
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics"

import { DUMMY_EXPENSES } from "~/mockup/mockup"

const ExpensesAnalysis = () => {
  return (
    <main>
      <ExpenseChart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  )
}

export default ExpensesAnalysis