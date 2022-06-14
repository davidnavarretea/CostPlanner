import { useState } from 'react'
import Header from './components/Header'

const App = () => {
  const [budget, setBudget] = useState(0)
  const [validationBudget, setValidationBudget] = useState(false)
  return (
    <>
      <Header
      budget = {budget}
      setBudget = {setBudget}
      validationBudget = {validationBudget}
      setValidationBudget = {setValidationBudget}
      />
    </>
  )
}

export default App