export default function ExpenseListItem({title, amount}: any) {
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
          <a href="tbd">Edit</a>
        </menu>
      </article>
    </>
  )
}