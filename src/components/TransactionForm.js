import { useState } from 'react'

const TransactionForm = () => {
    const [nameValue, setNameValue] = useState('')
    const [amountValue, setAmountValue] = useState('')

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
                    <button className="income-btn">Add Income</button>
                    <button className="income-btn">Add Expense</button>
                </div>
            </form>
        </div>
    );
}

export default TransactionForm
