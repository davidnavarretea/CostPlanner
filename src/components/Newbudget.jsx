const Newbudget = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label>Set Budget</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Add budget"
          />
          <input
            type="submit"
            value="Set"
          />
        </div>
      </form>
    </div>
  )
}

export default Newbudget