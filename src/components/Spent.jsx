const Spent = ({spent}) => {
  const dateFormat = date => {
    const dateformat = new Date(date)
    const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    }
  return dateformat.toLocaleDateString('es-ES', options)
}
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{spent.category}</p>
          <p className="nombre-gasto">{spent.name}</p>
          <p className="fecha-gasto">Agregado el: {''}
          <span>{dateFormat(spent.date)}</span></p>
        </div>
      </div>
      <p className="cantidad-gasto">${spent.amount}</p>
    </div>
  )
}

export default Spent