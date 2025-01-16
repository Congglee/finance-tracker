"use client";

import DataCard from "@/app/dashboard/_components/data-card";
import { summary } from "@/constants/data";
import { FaPiggyBank } from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

export default function DataGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <DataCard
        title="Remaining"
        value={summary.remainingAmount}
        percentageChange={summary.remainingChange}
        dateRange="Dec 17 - Jan 16, 2025"
        icon={FaPiggyBank}
      />
      <DataCard
        title="Income"
        value={summary.incomeAmount}
        percentageChange={summary.incomeChange}
        dateRange="Dec 17 - Jan 16, 2025"
        icon={FaArrowTrendUp}
        variant="success"
      />
      <DataCard
        title="Expenses"
        value={summary.expensesAmount}
        percentageChange={summary.expensesChange}
        dateRange="Dec 17 - Jan 16, 2025"
        icon={FaArrowTrendDown}
        variant="danger"
      />
    </div>
  );
}
