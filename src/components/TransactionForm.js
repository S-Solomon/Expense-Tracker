import { nanoid } from 'nanoid'
import { useState } from 'react'

const TransactionForm = ({onNewTransaction}) => {
    const [nameValue, setNameValue] = useState('')
    const [amountValue, setAmountValue] = useState('')

    const addTransaction = (type, evt) => {
        evt.preventDefault();

        const data = {id: nanoid(), name: nameValue, amount: parseInt(amountValue), type: type};

        onNewTransaction(data)

        setNameValue("");
        setAmountValue("");
    }

    return (
        <div>
            <h2>Add New Transaction</h2>
            <form className="transaction-form">
                <label htmlFor="Name">
                    Name
                    <div>
                        <input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)}/>
                    </div>
                </label>
                <label htmlFor="Amount">
                    Amount
                    <div>
                        <input type="number" value={amountValue} onChange={(e) => setAmountValue(e.target.value)}/>
                    </div>
                </label>
                <div>
                    <button className="income-btn" onClick={(e) => addTransaction('income', e)}>Add Income</button>
                    <button className="expense-btn" onClick={(e) => addTransaction('expense', e)}>Add Expense</button>
                </div>
            </form>
        </div>
    );
}

export default TransactionForm
