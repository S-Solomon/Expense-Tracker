import { CgTrash } from 'react-icons/cg'


const TransactionHistory = ({ transactions, onDeleteTransaction }) => {
    return (
        <div>
            <h2>Transaction History</h2>
            <ul className="transactions">
                {transactions.map((data) => (
                    <li key={data.id}>
                        {data.name} - £{data.amount}
                        <button
                            onClick={() => onDeleteTransaction(data.id)}
                            className="trash-can"
                        >
                            <CgTrash />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionHistory
