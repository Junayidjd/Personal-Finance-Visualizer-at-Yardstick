import { useTheme } from '../../context/ThemeContext';

interface BudgetInsightsProps {
  totalBudget: number;
  totalSpent: number;
}

const BudgetInsights = ({ totalBudget, totalSpent }: BudgetInsightsProps) => {
  const { isDarkMode } = useTheme();
  const balance = totalBudget - totalSpent;
  const status = balance < 0 ? 'Overspent' : 'Under Budget';

  return (
    <div
      className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
    >
      <h2 className="text-xl font-semibold">Spending Insights</h2>
      <div className="mt-4">
        <p className="text-lg">
          Total Budget: ${totalBudget}
        </p>
        <p className="text-lg">
          Total Spent: ${totalSpent}
        </p>
        <p className={`text-xl font-semibold ${balance < 0 ? 'text-red-600' : 'text-green-600'}`}>
          {status}: ${Math.abs(balance)}
        </p>
      </div>
    </div>
  );
};

export default BudgetInsights;
