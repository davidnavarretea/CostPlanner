import { useState, useEffect } from 'react'
import Header from './components/Header'
import Spentlist from './components/Spentlist'
import Modal from './components/Modal'
import iconNewSpent from './img/nuevo-gasto.svg'
const App = () => {
  // UseStates
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )
  const [validationBudget, setValidationBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [spents, setSpents] = useState(
    JSON.parse(localStorage.getItem('spents')) ?? []
  )
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
  // LOCAL STORAGE
  /* 1 */
  useEffect(() => {
    const budgetLC = Number(localStorage.getItem('budget')) ?? 0
    if (budgetLC > 0){
      setValidationBudget(true)
    }
  }, [])
  /* Budget */
  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])
  /* Spents */
  useEffect(() => {
    localStorage.setItem('spents', JSON.stringify(spents) ?? [])
  }, [spents])
  
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
      setSpentsEdit({})
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
  // Delete Expense
  const deleteExpense = id => {
    setSpents(spents.filter(e => e.id !== id))
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
            deleteExpense = {deleteExpense}
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
        setSpentsEdit = {setSpentsEdit}
        />
      }
    </div>
  )
}

export default App