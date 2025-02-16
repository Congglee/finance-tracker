import BudgetProgressBar from "@/app/dashboard/budgets/[budgetId]/_components/budget-progress-bar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface BudgetProgressCardProps {
  amount: number;
  spent: number;
}

export default function BudgetUsageProgress({
  amount,
  spent,
}: BudgetProgressCardProps) {
  const percentageSpent = spent > amount ? 100 : (spent / amount) * 100;

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="py-3 bg-muted/50 px-5">
        <CardTitle className="text-lg leading-6 line-clamp-1">
          Budget Usage
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 text-xs xs:text-sm flex flex-col items-center justify-center text-[#342d3e]">
        <BudgetProgressBar
          amount={amount}
          spent={spent}
          percentageSpent={percentageSpent}
        />
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-5 py-3 text-muted-foreground text-xs">
        <div className="flex flex-col xs:flex-row gap-y-1 gap-x-6 items-start xs:justify-between w-full">
          <div className="flex flex-col gap-1 font-semibold basis-1/2">
            Remaining: {formatCurrency(amount - spent)}
          </div>
          <div className="xs:text-right basis-1/2 line-clamp-2">
            {spent > amount ? (
              <span className="text-destructive font-medium">
                Over budget by {formatCurrency(spent - amount)}
              </span>
            ) : (
              <span className="text-muted-foreground">
                {(((amount - spent) / amount) * 100).toFixed(1)}% available
              </span>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
