"use client";

import BudgetOverview from "@/app/dashboard/budgets/[budgetId]/_components/budget-overview";
import BudgetUsageProgress from "@/app/dashboard/budgets/[budgetId]/_components/budget-usage-progress";
import { columns } from "@/app/dashboard/budgets/[budgetId]/_components/columns";
import ContentLayout from "@/components/dashboard-panel/content-layout";
import DataTable from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { budgets, transactions } from "@/constants/mock-data";
import { useConfirm } from "@/hooks/use-confirm";
import { Trash } from "lucide-react";
import { notFound, useParams } from "next/navigation";

export default function BudgetDetailsClient() {
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure you want to delete this budget?",
    "You are about to delete this budget."
  );

  const params = useParams();
  const budgetId = params.budgetId;

  const budget = budgets.find((b) => b.id === budgetId);

  const isLoading = false;

  if (!budget) {
    return notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Budgets", href: "/dashboard/budgets" },
    { name: budget.name, href: `/dashboard/budgets/${budget.id}` },
  ];

  const handleDelete = async () => {
    const ok = await confirm();

    if (ok) {
      // Delete transaction
      console.log("Delete transaction with id:", budgetId);
    }
  };

  const budgetTransactions = transactions.filter(
    (transaction) => transaction.amount < 0
  );

  return (
    <>
      <ConfirmDialog />
      <ContentLayout
        title="Budgets"
        breadcrumbs={breadcrumbs}
        hasFilters={false}
        heading="Budget Details"
        description="View and manage your budget here"
      >
        <div className="mt-8 space-y-8">
          <Card className="border-none drop-shadow-sm">
            <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
              <CardTitle className="font-medium text-xl line-clamp-1">
                {budget.name}
              </CardTitle>
              <div className="flex flex-col lg:flex-row items-center gap-2">
                <Button
                  size="sm"
                  variant="destructive"
                  className="w-full lg:w-auto"
                  onClick={handleDelete}
                >
                  <Trash className="size-4 mr-2" />
                  Delete budget
                </Button>
              </div>
            </CardHeader>
            <div className="px-6">
              <Separator />
            </div>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-6 items-start">
                <BudgetOverview budget={budget} />
                <BudgetUsageProgress
                  amount={budget.amount}
                  spent={budget.spent}
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">
                    {budget.name} Expenses
                  </h2>
                </div>
                <DataTable
                  filterKey="payee"
                  columns={columns}
                  data={budgetTransactions}
                  onDelete={() => {}}
                  disabled={false}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </ContentLayout>
    </>
  );
}
