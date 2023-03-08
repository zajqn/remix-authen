import { Link } from "@remix-run/react"

export default function ExpenseListItem({id, title, amount}: any) {
  const deleteExpenseItemHandler = () => {
    
  }

  return(
    <>
      <article className="expense-item">
        <div>
          <h2 className="expense-title">{title}</h2>
          <p className="expense-amount">${amount.toFixed(2)}</p>
        </div>
        <menu className="expense-actions">
          <button onClick={deleteExpenseItemHandler}>Delete</button>
          <Link to={`${id}/edit`}>Edit</Link>
        </menu>
      </article>
    </>
  )
}