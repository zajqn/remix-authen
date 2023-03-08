import { Link } from "@remix-run/react";

const ExpenseForm = () => {
  const today = new Date().toISOString().slice(0, 10);
  
  return (
    <>
      <form method="POST" className="form">
        <p>
          <label htmlFor="title">Expense Title </label>
          <input type="text" id="title" name="title" required maxLength={30} />
        </p>

        <div className="form-row">
          <p>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="0"
              step="0.01"
              required
            />
          </p>
          <p>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" max={today} required />
          </p>
        </div>
        <div className="form-actions">
          <button>Save Expense</button>
          <Link to="..">Cancel</Link>
        </div>
      </form>
    </>
  )
}

export default ExpenseForm