
interface Transaction {
  id: number;
  amount: number;
  description: string;
  date: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: number) => void;
  onEdit: (transaction: Transaction) => void;
}

const TransactionList = ({ transactions, onDelete, onEdit }: TransactionListProps) => {
  return (
    <div>
      <h2 className="text-xl">Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between items-center p-2">
            <div>
              <p>{transaction.description}</p>
              <p className="text-sm">{transaction.date}</p>
            </div>
            <div>
              <p className={`font-semibold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                ${transaction.amount}
              </p>
              <button onClick={() => onEdit(transaction)} className="text-blue-500">Edit</button>
              <button onClick={() => onDelete(transaction.id)} className="ml-2 text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
