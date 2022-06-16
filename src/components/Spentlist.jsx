import Spent from "./Spent"
const Spentlist = ({spents}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{spents.length ? 'Expenses' : 'No expenses'}</h2>
      {spents.map(spent => (
        <Spent
        key={spent.id}
        spent={spent}/>
      ))}
    </div>
  )
}

export default Spentlist