import ExpenseListItem from "./ExpenseListItem"

export default function ExpenseList({expenses}: any) {
  return(
    <>
      <ol id="expenses-list">
        { expenses.map((expense: any) =>(
          <li key={expense.id}>
            <ExpenseListItem
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
            />
          </li>
        )) }
      </ol>
    </>
  )
}