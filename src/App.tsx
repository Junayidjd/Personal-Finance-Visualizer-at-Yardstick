import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import { Switch } from '@headlessui/react';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`p-4 shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-600'}`}>
          FinanceApp
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/transactions"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Transactions
          </Link>
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            className={`${
              isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Toggle Theme</span>
            <span
              className={`${
                isDarkMode ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>
    </nav>
  );
};
