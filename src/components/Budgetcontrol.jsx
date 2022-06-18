import { useState, useEffect } from "react"
import Formatamount from "./Formatamount"
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const Budgetcontrol = ({budget, spents, setBudget, setValidationBudget, setSpents}) => {
    /* UseStates */
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    const [percentageSpent, setPercentageSpent] = useState(0)
    /* UseEffects */
    let totalSpents
    useEffect(() => {
        totalSpents = spents.reduce((total, eachSpent) => parseInt(eachSpent.amount) + total, 0)
        setSpent(totalSpents)
        setAvailable(budget - totalSpents)
        // Calculate percentageSpent
        setTimeout(() => {
            setPercentageSpent(totalSpents * 100 / budget)
        }, 500)
    }, [spents])
    // RESET
    const handleReset = () => {
        const result = confirm('Reset all data?')
        if(result){
            setBudget(0)
            setValidationBudget(false)
            setSpents([])
        }
    }
  return (
    <div className="contenedor contenedor-presupuesto sombra dos-columnas">
        <div>
            <CircularProgressbar
                value={percentageSpent}
                text={`${percentageSpent}%`}
                styles={buildStyles({
                    pathColor: percentageSpent > 100 ? '#DB2877' : '#77a2bc',
                    trailColor: '#F5F5F5',
                    pathTransitionDuration: 1,
                    textColor: percentageSpent > 100 ? '#DB2877' : '#77a2bc',
                })}
            />
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Budget: </span> {Formatamount(budget)}
            </p>
            <p className={available < 0 ? 'negativo' : ''}>
                <span>Available: </span> {Formatamount(available)}
            </p>
            <p>
                <span>Spent: </span> {Formatamount(spent)}
            </p>
            <button
             className="reset-app"
             type="button"
             onClick={handleReset}
            >
                Reset
            </button>
        </div>
    </div>
  )
}

export default Budgetcontrol