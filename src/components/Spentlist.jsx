import Spent from "./Spent"
const Spentlist = ({spents, setSpentsEdit, deleteExpense, filter, filterSpents}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>{filterSpents.length ? 'Expenses' : 'No expenses'}</h2>
          {filterSpents.map(spent => (
        <Spent
        key={spent.id}
        spent={spent}
        setSpentsEdit={setSpentsEdit}
        deleteExpense={deleteExpense}
        />
      ))}
        </>
      ):(
        <>
          <h2>{spents.length ? 'Expenses' : 'No expenses'}</h2>
          {spents.map(spent => (
        <Spent
        key={spent.id}
        spent={spent}
        setSpentsEdit={setSpentsEdit}
        deleteExpense={deleteExpense}
        />
      ))}
        </>
      )}
    </div>
  )
}

export default Spentlist