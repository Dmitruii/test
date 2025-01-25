import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionListPage from "./pages/TransactionListPage.tsx";
import TransactionDetailPage from "./pages/TransactionDetailPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/detail/:id" element={<TransactionDetailPage />} />
        <Route path="/" element={<TransactionListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
