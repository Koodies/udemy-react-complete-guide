import './index.css'
import { useState } from 'react'
import Card from '../Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpenseChart'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterByYearHandler = (year) => {
        setFilteredYear(year)
    }
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear() === +filteredYear;
    })
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear}
                filterByYear={filterByYearHandler} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses