import { useParams } from "@remix-run/react"

const ExpensesDetail = () => {
  const params = useParams()
  return (
    <>
      Hi {params.expensesID}
    </>
  )
}

export default ExpensesDetail