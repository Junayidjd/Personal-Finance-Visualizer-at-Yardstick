import { useTheme } from '../../context/ThemeContext';

interface BalanceCardProps {
  title: string;
  amount: string;
}

export default function BalanceCard({ title, amount }: BalanceCardProps) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg shadow-lg ${
        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{amount}</p>
    </div>
  );
}