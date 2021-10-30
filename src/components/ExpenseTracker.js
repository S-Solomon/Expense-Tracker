import { nanoid } from "nanoid";
import Expense from "./Expense"
import TransactionForm from "./TransactionForm"
import TransactionHistory from "./TransactionHistory"

const transactionData = [
    { id: nanoid(),  name: 'salary', amount:3000 , type: 'income' },
    { id: nanoid(),  name: 'Grocery', amount:100 , type: 'Expense' },
];

const ExpenseTracker = () => {
    return (
        <div>
            <h1>Expense Tracker</h1>
            <Expense income={3000} expense={500}/>
            <TransactionHistory transactions={transactionData}/>
            <TransactionForm />
        </div>
    )
}

export default ExpenseTracker
