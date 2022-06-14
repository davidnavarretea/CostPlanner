import { useState } from "react"
import Message from "./Message"

const Newbudget = ({budget, setBudget, setValidationBudget}) => {
  const [message, setMessage] = useState('')
  const handleBudget = e => {
    e.preventDefault()
    if(!budget || budget < 0){
      setMessage('Invalid budget')
      setValidationBudget(false)
      return
    }
    setMessage('')
    setValidationBudget(true)
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label>Set Budget</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
          />
        </div>
        <input
            type="submit"
            value="Set"
        />
        {message && <Message type="error">{message}</Message>}     
      </form>
    </div>
  )
}

export default Newbudget