import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const categoryData = [
  { name: 'Groceries', value: 4000 },
  { name: 'Rent', value: 2000 },
  { name: 'Entertainment', value: 1500 },
  { name: 'Transport', value: 1000 },
];

const CategoryBreakdown = () => {
  const colors = ['#4ade80', '#60a5fa', '#f87171', '#34d399'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={categoryData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={5}>
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CategoryBreakdown;
