"use client";

import BudgetCard from "@/app/dashboard/budgets/_components/budget-card";
import CategoryFilter from "@/app/dashboard/budgets/_components/category-filter";
import UploadButton from "@/app/dashboard/transactions/_components/upload-button";
import AutoPagination from "@/components/auto-pagination";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { budgets, categories } from "@/constants/mock-data";
import { Option } from "@/constants/options";
import { useNewBudget } from "@/store/budgets/use-new-budget";
import { Download, PlusCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function BudgetsClient() {
  const { onOpen } = useNewBudget();

  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
        <CardTitle className="font-medium text-xl line-clamp-1">
          Budgets Page
        </CardTitle>
        <div className="flex flex-col lg:flex-row items-center gap-2">
          <Button
            size="sm"
            className="w-full lg:w-auto bg-[#4CAF50]"
            onClick={onOpen}
          >
            <PlusCircle className="size-4 mr-2" />
            Add new
          </Button>
          <UploadButton onUpload={() => {}} />
        </div>
      </CardHeader>
      <div className="px-6">
        <Separator />
      </div>
      <CardContent className="space-y-4">
        <div className="flex w-full items-center justify-between gap-2 overflow-auto px-1 py-2 my-2 scroll">
          <div className="flex flex-1 items-center gap-2">
            <Input className="h-9 w-40 lg:w-64" placeholder="Filter name..." />
            <CategoryFilter />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="lg:flex gap-2.5"
              onClick={() => {}}
            >
              <Download />
              Export CSV
            </Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {budgets.map((budget) => (
            <BudgetCard
              key={budget.id}
              budget={budget}
              hasModifyActions={true}
            />
          ))}
        </div>
        <AutoPagination
          page={1}
          pageSize={1}
          pathname="/dashboard/budgets"
          className="sm:justify-end"
        />
      </CardContent>
    </Card>
  );
}
