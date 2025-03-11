import React, { useState } from 'react';

type Transaction = {
  id: number;
  amount: number;
  description: string;
  date: string;
};

interface TransactionFormProps {
  onSubmit: (transaction: Transaction) => void;
  existingTransaction?: Transaction;
}

const TransactionForm = ({ onSubmit, existingTransaction }: TransactionFormProps) => {
  const [amount, setAmount] = useState<string>(existingTransaction?.amount.toString() || '');
  const [description, setDescription] = useState<string>(existingTransaction?.description || '');
  const [date, setDate] = useState<string>(existingTransaction?.date || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && description && date) {
      onSubmit({ 
        id: existingTransaction?.id || Date.now(), 
        amount: parseFloat(amount), 
        description, 
        date 
      });
      setAmount('');
      setDescription('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="amount" className="block">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="border p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="description" className="block">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="date" className="block">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="border p-2 rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default TransactionForm;
