import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../context/ThemeContext';

interface BudgetComparisonProps {
  data: {
    category: string;
    budgeted: number;
    actual: number;
  }[];
}

const BudgetComparisonChart = ({ data }: BudgetComparisonProps) => {
  const { isDarkMode } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="category" stroke={isDarkMode ? '#94a3b8' : '#4b5563'} />
        <YAxis stroke={isDarkMode ? '#94a3b8' : '#4b5563'} />
        <Tooltip
          contentStyle={{
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
            border: isDarkMode ? '1px solid #334155' : '1px solid #e5e7eb',
            borderRadius: '8px',
          }}
        />
        <Bar dataKey="budgeted" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="actual" fill="#2563eb" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BudgetComparisonChart;
