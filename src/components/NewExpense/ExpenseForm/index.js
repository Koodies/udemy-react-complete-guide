import './index.css'
import { useState } from 'react'

function ExpenseForm(props) {

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleChangeHandler = (event) => {
        // setUserInput((prevState) => {
        //     return {...prevState, title: event.target.value }
        // })
        setTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title,
            amount,
            date: new Date(date)
        }
        props.saveExpense(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
        props.onCancel()
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={date} onChange={dateChangeHandler} />
                </div>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit' className='new-expense__button'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm