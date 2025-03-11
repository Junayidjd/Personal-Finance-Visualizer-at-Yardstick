import { useState } from 'react';
import MonthlyExpensesChart from '../components/charts/MonthlyExpensesChart';
import BudgetComparisonChart from '../components/charts/BudgetComparisonChart';
import BalanceCard from '../components/ui/BalanceCard';
import BudgetForm from '../components/shared/BudgetForm';
import BudgetInsights from '../components/ui/BudgetInsights';
import { useTheme } from '../context/ThemeContext';

export default function Dashboard() {
  const { isDarkMode } = useTheme();
  const [budgets, setBudgets] = useState([
    { category: 'Groceries', budgeted: 500, actual: 450 },
    { category: 'Rent', budgeted: 1000, actual: 1000 },
    { category: 'Entertainment', budgeted: 200, actual: 250 },
  ]);

  const handleSaveBudget = (category: string, budget: number) => {
    setBudgets((prev) => [...prev, { category, budgeted: budget, actual: 0 }]);
  };

  const totalBudget = budgets.reduce((sum, budget) => sum + budget.budgeted, 0);
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.actual, 0);

  return (
    <div className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <BalanceCard title="Total Balance" amount="$12,345" />
        <BalanceCard title="Income" amount="$5,000" />
        <BalanceCard title="Expenses" amount="$2,500" />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Set Monthly Budget</h2>
        <BudgetForm onSave={handleSaveBudget} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BudgetComparisonChart data={budgets} />
        <BudgetInsights totalBudget={totalBudget} totalSpent={totalSpent} />
      </div>
    </div>
  );
}
