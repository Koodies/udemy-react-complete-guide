import './index.css'
import ExpenseItem from '../ExpenseItem'

function ExpensesList(props){
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
    return (
        <u className='expenses-list'>
            {props.items.map(expense => (
            <ExpenseItem
                key={expense.id}
                expense={expense}
            />))}
        </u>
    )
}

export default ExpensesList