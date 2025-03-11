// import React, { useState } from 'react';

// type Transaction = {
//   id: number;
//   amount: number;
//   description: string;
//   date: string;
// };

// interface TransactionFormProps {
//   onSubmit: (transaction: Transaction) => void;
//   existingTransaction?: Transaction;
// }

// const TransactionForm = ({ onSubmit, existingTransaction }: TransactionFormProps) => {
//   const [amount, setAmount] = useState<string>(existingTransaction?.amount.toString() || '');
//   const [description, setDescription] = useState<string>(existingTransaction?.description || '');
//   const [date, setDate] = useState<string>(existingTransaction?.date || '');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (amount && description && date) {
//       onSubmit({ 
//         id: existingTransaction?.id || Date.now(), 
//         amount: parseFloat(amount), 
//         description, 
//         date 
//       });
//       setAmount('');
//       setDescription('');
//       setDate('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label htmlFor="amount" className="block">Amount</label>
//         <input
//           type="number"
//           id="amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           required
//           className="border p-2 rounded"
//         />
//       </div>
//       <div>
//         <label htmlFor="description" className="block">Description</label>
//         <input
//           type="text"
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//           className="border p-2 rounded"
//         />
//       </div>
//       <div>
//         <label htmlFor="date" className="block">Date</label>
//         <input
//           type="date"
//           id="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           required
//           className="border p-2 rounded"
//         />
//       </div>
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
//     </form>
//   );
// };

// export default TransactionForm;




























import React, { useState } from 'react';

type Transaction = {
  id: number;
  amount: number;
  description: string;
  date: string;
  category: string;
};

interface TransactionFormProps {
  onSubmit: (transaction: Transaction) => void;
  existingTransaction?: Transaction;
}

const TransactionForm = ({ onSubmit, existingTransaction }: TransactionFormProps) => {
  const [amount, setAmount] = useState<string>(existingTransaction?.amount.toString() || '');
  const [description, setDescription] = useState<string>(existingTransaction?.description || '');
  const [date, setDate] = useState<string>(existingTransaction?.date || '');
  const [category, setCategory] = useState<string>(existingTransaction?.category || '');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!amount) newErrors.amount = 'Amount is required';
    if (!description) newErrors.description = 'Description is required';
    if (!date) newErrors.date = 'Date is required';
    if (!category) newErrors.category = 'Category is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        id: existingTransaction?.id || Date.now(),
        amount: parseFloat(amount),
        description,
        date,
        category,
      });
      setAmount('');
      setDescription('');
      setDate('');
      setCategory('');
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
        {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
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
        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
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
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>
      <div>
        <label htmlFor="category" className="block">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="border p-2 rounded"
        >
          <option value="">Select a category</option>
          <option value="Groceries">Groceries</option>
          <option value="Rent">Rent</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transport">Transport</option>
        </select>
        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default TransactionForm;