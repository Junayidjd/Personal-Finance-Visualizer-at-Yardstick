
import { useState, useEffect } from 'react';
import TransactionForm from '../components/shared/TransactionForm';
import TransactionList from '../components/shared/TransactionList';
import { saveTransactions, getTransactions } from '../lib/localStorageUtils';

const Transactions = () => {
  const [transactions, setTransactions] = useState<any[]>(getTransactions());

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  const handleAddTransaction = (transaction: any) => {
    setTransactions([...transactions, transaction]);
  };

  const handleDeleteTransaction = (id: string | number) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const handleEditTransaction = (transaction: any) => {
    setTransactions(transactions.map((t) => (t.id === transaction.id ? transaction : t)));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Transactions</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TransactionForm onSubmit={handleAddTransaction} />
        <TransactionList
          transactions={transactions}
          onDelete={handleDeleteTransaction}
          onEdit={handleEditTransaction}
        />
      </div>
    </div>
  );
};

export default Transactions;