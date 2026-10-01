const API_BASE_URL = "http://localhost:8000";

export async function addExpense(data: any) {
  const res = await fetch(`${API_BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      amount: parseFloat(data.amount),
    }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || "Failed to add expense");
  }
  return res.json();
}

export async function getDashboardData(month?: number, year?: number) {
  let url = `${API_BASE_URL}/dashboard`;
  if (month && year) {
    url += `?month=${month}&year=${year}`;
  }
  const res = await fetch(url);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || "Failed to fetch dashboard data");
  }
  return res.json();
}
