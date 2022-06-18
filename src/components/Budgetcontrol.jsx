import { useState, useEffect } from "react"
import Formatamount from "./Formatamount"
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const Budgetcontrol = ({budget, spents}) => {
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
  return (
    <div className="contenedor contenedor-presupuesto sombra dos-columnas">
        <div>
            <CircularProgressbar
                value={percentageSpent}
                text={`${percentageSpent}%`}
                styles={buildStyles({
                    pathColor: '#77a2bc',
                    trailColor: '#F5F5F5',
                    pathTransitionDuration: 1,
                    textColor: '#77a2bc',
                })}
            />
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