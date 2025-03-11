
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface CategoryBreakdownProps {
  transactions: { category: string; amount: number }[];
}

const CategoryBreakdown = ({ transactions }: CategoryBreakdownProps) => {
  const categoryData = transactions.reduce((acc, transaction) => {
    const category = transaction.category || 'Uncategorized';
    acc[category] = (acc[category] || 0) + transaction.amount;
    return acc;
  }, {} as { [key: string]: number });

  const data = Object.keys(categoryData).map((category) => ({
    name: category,
    value: categoryData[category],
  }));

  const colors = ['#4ade80', '#60a5fa', '#f87171', '#34d399', '#fbbf24', '#a78bfa'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={5}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CategoryBreakdown;