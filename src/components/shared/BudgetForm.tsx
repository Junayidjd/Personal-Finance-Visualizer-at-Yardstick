

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface BudgetFormProps {
  onSave: (category: string, budget: number) => void;
}

const BudgetForm = ({ onSave }: BudgetFormProps) => {
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(category, budget);
    setCategory('');
    setBudget(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label className="font-medium text-gray-800">Category</label>
        <Input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 mt-1 rounded-md"
          placeholder="Enter category name"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-gray-800">Budget Amount</label>
        <Input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="p-2 mt-1 rounded-md"
          placeholder="Enter amount"
          required
        />
      </div>

      <Button type="submit" className="w-full bg-blue-600 text-white mt-4">
        Save Budget
      </Button>
    </form>
  );
};

export default BudgetForm;