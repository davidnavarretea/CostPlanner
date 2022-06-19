import {useState, useEffect} from 'react'

const Filter = ({filter, setFilter}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label className='sf'>Filter expenses</label>
                <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
                >
                    <option value=''>All categories</option>
                    <option value='saving'>Saving</option>
                    <option value='food'>Food</option>
                    <option value='rent'>Rent</option>
                    <option value='leisure'>Leisure</option>
                    <option value='health'>Health</option>
                    <option value='subscriptions'>Subscriptions</option>
                    <option value='other'>Other expenses</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filter