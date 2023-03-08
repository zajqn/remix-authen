import { DUMMY_EXPENSES_CHART } from "~/mockup/mockup"
import ExpenseChartBar from "./ExpenseChartBar"

const ExpenseChart = ({expenses}: any) => {
  for (const expense of expenses) {
    const expenseMonth = new Date(expense.date).getMonth(); // starting at 0 => January => 0
    DUMMY_EXPENSES_CHART[expenseMonth].value += expense.amount;
  }

  const dataPointValues = DUMMY_EXPENSES_CHART.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <>
      <section>
        <h2>Monthly Expenses</h2>
        <ol className='chart'>
          {DUMMY_EXPENSES_CHART.map((dataPoint) => (
            <ExpenseChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMaximum}
              label={dataPoint.label}
            />
          ))}
        </ol>
      </section>
    </>
  )
}

export default ExpenseChart