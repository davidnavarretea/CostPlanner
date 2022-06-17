import { useState, useEffect } from "react"
const Budgetcontrol = ({budget, spents}) => {
    /* UseStates */
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    /* UseEffects */
    let totalSpents
    useEffect(() => {
        totalSpents = spents.reduce((total, eachSpent) => parseInt(eachSpent.amount) + total, 0)
        setSpent(totalSpents)
    }, [spents])
    useEffect(() => {
        setAvailable(budget - totalSpents)
    }, [spents])
    /* Format Money */
    const formatAmount = c => {
        return c.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
  return (
    <div className="contenedor contenedor-presupuesto sombra dos-columnas">
        <div>
            <p>Graph</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Budget: </span> {formatAmount(budget)}
            </p>
            <p>
                <span>Available: </span> {formatAmount(available)}
            </p>
            <p>
                <span>Spent: </span> {formatAmount(spent)}
            </p>
        </div>
    </div>
  )
}

export default Budgetcontrol