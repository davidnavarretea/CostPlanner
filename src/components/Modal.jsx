import { useState } from 'react'
import Message from './Message'
import closeModalImg from '../img/cerrar.svg'
const Modal = ({setModal, animateModal, setAnimateModal, saveSpent}) => {
    // UseStates
    const [name,setName] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')
    // Close Modal
    const handleModal = () => {
        setAnimateModal(false)
        setTimeout(() => {
        setModal(false)
        }, 400)
    }
    // Validation Form
    const handleSubmit = e => {
        e.preventDefault()
        if([name, amount, category].includes('')){
            setMessage('Fill in all fields')
            setTimeout(() => {
                setMessage('')
            }, 2000)
            return
        }
        setMessage('')
        saveSpent({name, amount, category})
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                src={closeModalImg}
                alt="closeModalImg"
                onClick={handleModal}
                />
            </div>
            <form
                onSubmit={handleSubmit}
                className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}>
                <legend>New Expense</legend>
                {message && <Message type='error'>{message}</Message>}
                <div className='campo'>
                    <label htmlFor='name'>Name</label>
                    <input
                    id='name'
                    type='text'
                    placeholder='Rent'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='amount'>Amount</label>
                    <input
                    id='amount'
                    type='number'
                    placeholder='500'
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='category'>Category</label>
                    <select
                    id='category'
                    defaultValue={category}
                    onChange={e => setCategory(e.target.value)}
                    >
                        <option value='' disabled>Select</option>
                        <option value='saving'>Saving</option>
                        <option value='food'>Food</option>
                        <option value='rent'>Rent</option>
                        <option value='leisure'>Leisure</option>
                        <option value='health'>Health</option>
                        <option value='subscriptions'>Subscriptions</option>
                        <option value='other'>Other expenses</option>
                    </select>
                </div>
                <input
                type='submit'
                value='Add'
                />
            </form>
        </div>
  )
}

export default Modal