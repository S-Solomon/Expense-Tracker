import { nanoid } from "nanoid";
import Expense from "./Expense"
import TransactionForm from "./TransactionForm"
import TransactionHistory from "./TransactionHistory"

import { useState, useEffect } from 'react'

// Aggregator component/container component


const transactionData = [
    { id: nanoid(),  name: 'salary', amount:3000 , type: 'income' },
    { id: nanoid(),  name: 'Grocery', amount:100 , type: 'Expense' },
];

const ExpenseTracker = () => {

    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [transactions, setTransactions] = useState(transactionData);

    const calculateExpenses = () => {
        let income = 0, expense = 0;

        transactions.forEach((data) => {
            if(data.type === 'income') {
                income += data.amount
            }else if (data.type === 'expense') {
                expense += data.amount
            }
        })
        // whenever we change the state of a value in react, the rerender of the component happens
        // setIncome(income);
        // setExpense(expense);
    }

    useEffect(() => {
        calculateExpenses();
    }, []);

    return (
        <div>
            <h1>Expense Tracker</h1>
            <Expense income={income} expense={expense} />
            <TransactionHistory transactions={transactions} />
            <TransactionForm />
        </div>
    );
}

export default ExpenseTracker
