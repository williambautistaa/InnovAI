import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getDashboardData } from "@/api";
import ExpenseChart from "@/components/ExpenseChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const [selectedMonth, setSelectedMonth] = useState(searchParams.get('month') || currentMonth.toString());
  const [selectedYear, setSelectedYear] = useState(searchParams.get('year') || currentYear.toString());

  useEffect(() => {
    if (!searchParams.get('month') || !searchParams.get('year')) {
      setSearchParams({ month: currentMonth.toString(), year: currentYear.toString() });
    }
    fetchDashboardData(selectedMonth, selectedYear);
  }, [selectedMonth, selectedYear, searchParams, setSearchParams, currentMonth, currentYear]);

  const fetchDashboardData = async (month, year) => {
    setLoading(true);
    try {
      const data = await getDashboardData(month, year);
      setDashboardData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMonthChange = (value) => {
    setSelectedMonth(value);
    setSearchParams({ month: value, year: selectedYear });
  };

  const handleYearChange = (value) => {
    setSelectedYear(value);
    setSearchParams({ month: selectedMonth, year: value });
  };

  const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];

  const years = Array.from({ length: 11 }, (_, i) => currentYear - 5 + i);

  return (
    <div className="w-full flex justify-start items-start p-6">
      <div className="w-1/2">
        <div className="flex space-x-2 mb-4">
          <Select value={selectedMonth} onValueChange={handleMonthChange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month.value} value={month.value.toString()}>
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedYear} onValueChange={handleYearChange}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-2">
          {loading ? (
            <Card>
              <CardHeader>
                <CardTitle><Skeleton className="h-4 w-full" /></CardTitle>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-[200px] w-full" />
              </CardContent>
            </Card>
          ) : error ? (
            <Alert variant="destructive">
              <AlertTitle className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Error
              </AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : !dashboardData || dashboardData.chart_data.length === 0 ? (
            <Alert>
              <AlertTitle className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                No Data
              </AlertTitle>
              <AlertDescription>
                No expense data is available for the selected month and year.
              </AlertDescription>
            </Alert>
          ) : (
            <div>
              <p className="text-lg font-semibold mt-4">Total Expenses: ${dashboardData.total_expenses.toFixed(2)}</p>
              <ExpenseChart chartData={dashboardData.chart_data} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
