import Budgetcontrol from "./Budgetcontrol"
import Newbudget from "./Newbudget"

const Header = ({budget, setBudget, validationBudget, setValidationBudget}) => {
  return (
    <header>
      <h1>Cost Planner</h1>
      {validationBudget ?
        <Budgetcontrol
        budget = {budget}
        /> : (
        <Newbudget
        budget = {budget}
        setBudget = {setBudget}
        setValidationBudget = {setValidationBudget}
        />
      )
      }
    </header>
  )
}

export default Header