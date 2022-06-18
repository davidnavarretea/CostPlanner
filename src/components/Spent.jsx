import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import Saving from '../img/icono_ahorro.svg'
import Food from '../img/icono_comida.svg'
import Rent from '../img/icono_casa.svg'
import Leisure from '../img/icono_ocio.svg'
import Health from '../img/icono_salud.svg'
import Subscriptions from '../img/icono_suscripciones.svg'
import Otherexpenses from '../img/icono_gastos.svg'
import Formatamount from './Formatamount'
const images = {
  saving: Saving,
  food: Food,
  rent: Rent,
  leisure: Leisure,
  health: Health,
  subscriptions: Subscriptions,
  other: Otherexpenses,
}
const Spent = ({spent, setSpentsEdit, deleteExpense}) => {
  const dateFormat = date => {
    const dateformat = new Date(date)
    const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    }
  return dateformat.toLocaleDateString('es-ES', options)
}
const leadingActions = () => (
  <LeadingActions>
    <SwipeAction onClick={() => setSpentsEdit(spent)}>
      Edit
    </SwipeAction>
  </LeadingActions>
)
const trailingActions = () => (
  <TrailingActions>
    <SwipeAction 
      onClick={() => deleteExpense(spent.id)}
      destructive={true}
    >
      Delete
    </SwipeAction>
  </TrailingActions>
  )
  return (
    <SwipeableList>
      <SwipeableListItem
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}
      >
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
          <p className="cantidad-gasto">{Formatamount(parseInt(spent.amount))}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Spent