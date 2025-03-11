import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', expenses: 4000 },
  { month: 'Feb', expenses: 3000 },
  { month: 'Mar', expenses: 2000 },
  { month: 'Apr', expenses: 5000 },
  { month: 'May', expenses: 6000 },
];

const MonthlyExpensesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="expenses" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MonthlyExpensesChart;
