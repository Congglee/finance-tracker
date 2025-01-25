"use client";

import Chart from "@/app/dashboard/_components/chart";
import SpendingPie from "@/app/dashboard/_components/spending-pie";
import { summary } from "@/constants/mock-data";

export default function DataCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
      <div className="col-span-1 lg:col-span-3 xl:col-span-4">
        <Chart data={summary.days} />
      </div>
      <div className="col-span-1 lg:col-span-3 xl:col-span-2">
        <SpendingPie data={summary?.categories} />
      </div>
    </div>
  );
}
