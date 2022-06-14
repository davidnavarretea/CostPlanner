import closeModalImg from '../img/cerrar.svg'
const Modal = ({setModal, animateModal, setAnimateModal}) => {
const handleModal = () => {
    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 400)
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
        <form className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}>
            <legend>New Expense</legend>
            <div className='campo'>
                <label htmlFor='name'>Name</label>
                <input
                id='name'
                type='text'
                placeholder='Rent'
                />
            </div>
            <div className='campo'>
                <label htmlFor='amount'>Amount</label>
                <input
                id='amount'
                type='number'
                placeholder='500'
                />
            </div>
            <div className='campo'>
                <label htmlFor='category'>Category</label>
                <select
                id='category'
                >
                    <option value='' selected disabled>Select</option>
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