import { useState, useEffect } from 'react'
import Header from './components/Header'
import Spentlist from './components/Spentlist'
import Modal from './components/Modal'
import iconNewSpent from './img/nuevo-gasto.svg'
const App = () => {
  // UseStates
  const [budget, setBudget] = useState(0)
  const [validationBudget, setValidationBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [spents, setSpents] = useState([])
  const [spentsEdit, setSpentsEdit] = useState({})
  // UseEffects
  useEffect(() => {
    if (Object.values(spentsEdit).length > 0) {
      setModal(true)
      setTimeout(() => {
      setAnimateModal(true)
      }, 100)
    }
  }, [spentsEdit])
  
  // New Spent
  const handleNewSpent = () => {
    setModal(true)
    setSpentsEdit({})
    setTimeout(() => {
      setAnimateModal(true)
    }, 100)
  }
  // Generate Id
  const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }
  // Save Spent
  const saveSpent = e => {
    if (e.id) {
      /* Edit Expense */
      const updateSpents = spents.map( stateSpent => stateSpent.id === e.id ? e : stateSpent)
      setSpents(updateSpents)
    } else {
      /* New Expense */
      e.id = generateId()
      e.date = Date.now()
      setSpents([...spents, e])
    }
    setAnimateModal(false)
    setTimeout(() => {
    setModal(false)
    }, 400)
  }
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
      budget = {budget}
      setBudget = {setBudget}
      validationBudget = {validationBudget}
      setValidationBudget = {setValidationBudget}
      spents = {spents}
      />
      {validationBudget &&
        <>
          <main>
            <Spentlist
            spents={spents}
            setSpentsEdit={setSpentsEdit}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
            src={iconNewSpent}
            alt='iconNewSpent'
            onClick={handleNewSpent}
            />
          </div>
        </>
      }
      {modal &&
        <Modal
        setModal = {setModal}
        animateModal = {animateModal}
        setAnimateModal = {setAnimateModal}
        saveSpent = {saveSpent}
        spentsEdit = {spentsEdit}
        />
      }
    </div>
  )
}

export default App