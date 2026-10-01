import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AddExpense from "./routes/AddExpense";
import Dashboard from "./routes/Dashboard";
import { Toaster } from "./components/ui/sonner";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";

function App() {
  return (
    <Router>
      <Toaster />
      <SidebarProvider>
        <div className="flex h-screen bg-background font-sans antialiased">
          <AppSidebar />
          <main className="flex-1 flex flex-col">
            <div className="p-4">
              <SidebarTrigger />
            </div>
            <div className="flex-1 overflow-auto">
              <Routes>
                <Route path="/" element={<Navigate to="/add" replace />} />
                <Route path="/add" element={<AddExpense />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </Router>
  );
}

export default App;
