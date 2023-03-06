import { useParams } from "@remix-run/react"

const ExpensesDetailEdit = () => {
  const params = useParams()
  return (
    <>
      Hi {params.expensesID} <strong>Action: Edit</strong>
    </>
  )
}

export default ExpensesDetailEdit