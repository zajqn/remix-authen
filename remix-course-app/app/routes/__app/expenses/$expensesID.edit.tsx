import { useNavigate } from "@remix-run/react"
import { useParams } from "@remix-run/react"


import Modal from "~/utils/Modal"
import ExpenseForm from "~/components/expenses/ExpenseForm"

const ExpensesDetailEdit = () => {
  const navigate = useNavigate()
  
  const closeHandle = () => {
    navigate('..')  
  }

  return (
    <>
      <Modal onClose={closeHandle}>
        <ExpenseForm />
      </Modal>
    </>
  )
}

export default ExpensesDetailEdit