import BudgetActions from "@/app/dashboard/budgets/_components/budget-actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatCurrency } from "@/lib/utils";
import { format } from "date-fns";
import { Plus } from "lucide-react";
import Link from "next/link";

interface BudgetCardProps {
  budget: any;
  hasModifyActions?: boolean;
}

export default function BudgetCard({
  budget,
  hasModifyActions = false,
}: BudgetCardProps) {
  const percentageSpent =
    budget.spent > budget.amount ? 100 : (budget.spent / budget.amount) * 100;

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="py-3 flex flex-row gap-6 bg-muted/50 px-5 space-y-0 items-start xs:items-center">
        <div className="space-y-1 flex flex-col flex-1">
          <CardTitle className="text-lg leading-6 line-clamp-1">
            <Link
              href={`/dashboard/budgets/${budget.id}/edit`}
              className="hover:underline hover:text-primary"
            >
              {budget.name}
            </Link>
          </CardTitle>
          <CardDescription className="text-[12.5px] line-clamp-1">
            {budget.startDate && budget.endDate
              ? `Date: ${format(budget.startDate, "dd/MM/yyyy")} - ${format(
                  budget.endDate,
                  "dd/MM/yyyy"
                )}`
              : "No date range"}
          </CardDescription>
        </div>
        <div className="ml-auto flex gap-2 flex-shrink-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="w-8 h-8 p-1"
                  onClick={() => {}}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add expense to budget</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {hasModifyActions && <BudgetActions budgetId={budget.id} />}
        </div>
      </CardHeader>
      <CardContent className="p-5 text-xs xs:text-sm flex flex-col items-center justify-center text-[#342d3e]">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="relative w-full cursor-pointer">
                <Progress value={percentageSpent} className="h-5" />
                <div className="text-xs absolute top-1/2 -translate-y-1/2 left-4 overflow-hidden font-semibold">
                  Amount: {formatCurrency(budget.amount)}
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent className="px-2 py-1 text-xs">
              <div className="space-y-1">
                <p>
                  Spent: {formatCurrency(budget.spent)} (
                  {percentageSpent.toFixed(1)}%)
                </p>
                <p>Budget: {formatCurrency(budget.amount)}</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-5 py-3 text-muted-foreground text-xs">
        <div className="flex flex-col xs:flex-row gap-y-4 gap-x-6 items-start xs:justify-between w-full">
          <div className="flex flex-col gap-1 font-semibold basis-1/2">
            <span>Spent: {formatCurrency(budget.spent)}</span>
            <span>
              Remaining: {formatCurrency(budget.amount - budget.spent)}
            </span>
          </div>
          <div className="xs:text-right basis-1/2 line-clamp-3">
            Category: Mock Category
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
