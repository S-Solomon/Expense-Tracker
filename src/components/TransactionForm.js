

const TransactionForm = () => {
    return (
        <div>
            <h2>Add New Transaction</h2>
            <form className="transaction-form">
                <label htmlFor="Name">
                    Name
                    <div>
                        <input type="text" />
                    </div>
                </label>
                <label htmlFor="Amount">
                    Amount
                    <div>
                        <input type="number" />
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
