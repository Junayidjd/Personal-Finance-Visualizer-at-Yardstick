// src/lib/localStorageUtils.ts

// Save transactions to localStorage
export const saveTransactions = (transactions: any[]) => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  };
  
  // Retrieve transactions from localStorage
  export const getTransactions = (): any[] => {
    const transactions = localStorage.getItem('transactions');
    return transactions ? JSON.parse(transactions) : [];
  };
  
  // Save budgets to localStorage
  export const saveBudgets = (budgets: any[]) => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  };
  
  // Retrieve budgets from localStorage
  export const getBudgets = (): any[] => {
    const budgets = localStorage.getItem('budgets');
    return budgets ? JSON.parse(budgets) : [];
  };