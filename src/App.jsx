import { useState } from 'react'
import Header from './components/Header'
import iconNewSpent from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
const App = () => {
  const [budget, setBudget] = useState(0)
  const [validationBudget, setValidationBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const handleNewSpent = () => {
    setModal(true)
    setTimeout(() => {
      setAnimateModal(true)
    }, 100)
  }
  return (
    <>
      <Header
      budget = {budget}
      setBudget = {setBudget}
      validationBudget = {validationBudget}
      setValidationBudget = {setValidationBudget}
      />
      {validationBudget &&
        <div className='nuevo-gasto'>
          <img
          src={iconNewSpent}
          alt='iconNewSpent'
          onClick={handleNewSpent}
          />
        </div>
      }
      {modal &&
        <Modal
        setModal = {setModal}
        animateModal = {animateModal}
        setAnimateModal = {setAnimateModal}
        />
      }
    </>
  )
}

export default App