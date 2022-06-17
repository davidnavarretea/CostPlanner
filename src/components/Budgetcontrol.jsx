import { useState, useEffect } from "react"
import Formatamount from "./Formatamount"
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
  return (
    <div className="contenedor contenedor-presupuesto sombra dos-columnas">
        <div>
            <p>Graph</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Budget: </span> {Formatamount(budget)}
            </p>
            <p>
                <span>Available: </span> {Formatamount(available)}
            </p>
            <p>
                <span>Spent: </span> {Formatamount(spent)}
            </p>
        </div>
    </div>
  )
}

export default Budgetcontrol