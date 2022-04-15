import './index.css'
import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../Card'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterByYearHandler = (year) => {
        setFilteredYear(year)
    }
    const filteredExpenses = props.expenses.filter(expense =>{
        return expense.date.getFullYear() === +filteredYear ;
      })
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} filterByYear={filterByYearHandler} />
            {filteredExpenses.map(expense => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}
        </Card>
    )
}

export default Expenses