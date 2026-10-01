import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const MonthlyExpenseSummary = ({ chartData, totalExpenses, month }) => {
  // Sort chartData by amount in descending order
  const sortedChartData = [...chartData].sort((a, b) => b.amount - a.amount);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Monthly Expense Summary - {month}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Total Expenses</h3>
          <p className="text-2xl font-bold">${totalExpenses.toFixed(2)}</p>
        </div>
        <div className="space-y-4">
          {sortedChartData.map((item, index) => {
            const percentage = (item.amount / totalExpenses) * 100;
            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.category}</span>
                  <span className="text-sm">${item.amount.toFixed(2)} ({percentage.toFixed(1)}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyExpenseSummary;
