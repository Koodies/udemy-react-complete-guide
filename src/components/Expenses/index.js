import './index.css'
import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../Card'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
    const expenses = props.expenses
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterByYearHandler = (year) => {
        setFilteredYear(year)
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} filterByYear={filterByYearHandler} />
            {expenses.map(expense => (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </Card>
    )
}

export default Expenses