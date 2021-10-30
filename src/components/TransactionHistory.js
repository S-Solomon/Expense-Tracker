
const TransactionHistory = ({ transactions }) => {
    return (
        <div>
            <h2>Transaction History</h2>
            <ul>
            {
                transactions.map((data) => (
                    <li key={data.id}>{data.name} - £{data.amount}
                        <button>x</button>
                    </li>
                ))
            }  
            </ul>
        </div>
    )
}

export default TransactionHistory
