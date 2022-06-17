import Saving from '../img/icono_ahorro.svg'
import Food from '../img/icono_comida.svg'
import Rent from '../img/icono_casa.svg'
import Leisure from '../img/icono_ocio.svg'
import Health from '../img/icono_salud.svg'
import Subscriptions from '../img/icono_suscripciones.svg'
import Otherexpenses from '../img/icono_gastos.svg'
const images = {
  saving: Saving,
  food: Food,
  rent: Rent,
  leisure: Leisure,
  health: Health,
  subscriptions: Subscriptions,
  other: Otherexpenses,
}
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
        <img
          src={images[spent.category]}
          alt={spent.category}
        />
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