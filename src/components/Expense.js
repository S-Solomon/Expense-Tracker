const Expense = ({ income, expense }) => {
    return (
        <div>
            <div>
                <h2>Your Balance</h2>
                <div>£{income - expense}</div>
            </div>
            <div>
                <div>
                    <h2>Income</h2>
                    <div>£{income}</div>
                </div>
                <div>
                    <h2>Expense</h2>
                    <div>£{expense}</div>
                </div>
            </div>
        </div>
    );
};

export default Expense;
