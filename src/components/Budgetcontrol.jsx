const Budgetcontrol = ({budget}) => {
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
                <span>Available: </span> {formatAmount(0)}
            </p>
            <p>
                <span>Spent: </span> {formatAmount(0)}
            </p>
        </div>
    </div>
  )
}

export default Budgetcontrol