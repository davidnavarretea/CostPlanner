import Newbudget from "./Newbudget"

const Header = ({budget, setBudget}) => {
  return (
    <header>
      <h1>Cost Planner</h1>
      <Newbudget
      budget = {budget}
      setBudget = {setBudget}
      />
    </header>
  )
}

export default Header