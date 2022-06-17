import Spent from "./Spent"
const Spentlist = ({spents, setSpentsEdit}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{spents.length ? 'Expenses' : 'No expenses'}</h2>
      {spents.map(spent => (
        <Spent
        key={spent.id}
        spent={spent}
        setSpentsEdit={setSpentsEdit}
        />
      ))}
    </div>
  )
}

export default Spentlist