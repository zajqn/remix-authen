import { useMemo } from "react"

const ExpenseStatistics = ({expenses}: any) => {
  const { minAmount, maxAmount, sum, mean } = useMemo(
    () => CaculateSummaryStatistics(expenses),
    [expenses]
  );

  return (
    <section>
      <h2>Summary Statistics</h2>
      <dl id="expense-statistics">
        <div>
          <dt>Total</dt>
          <dd>${sum.toFixed(2)}</dd>
        </div>
        <div>
          <dt>Average</dt>
          <dd>${mean.toFixed(2)}</dd>
        </div>
        <div>
          <dt>Min. Amount</dt>
          <dd>${minAmount.toFixed(2)}</dd>
        </div>
        <div>
          <dt>Max. Amount</dt>
          <dd>${maxAmount.toFixed(2)}</dd>
        </div>
      </dl>
    </section>
  )
}

const CaculateSummaryStatistics = (expenses: any) => {
  const amounts = expenses.map((expense: any) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal: any, curVal: any) => curVal.amount + prevVal, 0);
  const mean = sum / expenses.length;

  return { minAmount, maxAmount, sum, mean };
}


export default ExpenseStatistics