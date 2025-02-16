import OverviewProperty from "@/app/dashboard/budgets/[budgetId]/_components/overview-property";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";
import { format } from "date-fns";
import { PencilIcon } from "lucide-react";

interface BudgetOverviewProps {
  budget: any; // TODO: Replace any with data type from response data
}

export default function BudgetOverview({ budget }: BudgetOverviewProps) {
  return (
    <div className="flex flex-col gap-y-4 col-span-1">
      <div className="bg-background rounded-lg p-6">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Overview</p>
          <Button size="sm" variant="secondary" onClick={() => {}}>
            <PencilIcon className="size-4 mr-2" />
            Edit
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-y-4">
          <OverviewProperty label="Amount">
            <Badge variant="primary" className="rounded-md">
              {formatCurrency(budget.amount)}
            </Badge>
          </OverviewProperty>
          <OverviewProperty label="Spent">
            <Badge variant="primary" className="rounded-md">
              {formatCurrency(budget.spent)}
            </Badge>
          </OverviewProperty>
          <OverviewProperty label="Start Date">
            <span className="text-muted-foreground text-sm font-medium">
              {format(budget.startDate, "PPP")}
            </span>
          </OverviewProperty>
          <OverviewProperty label="End Date">
            <span className="text-muted-foreground text-sm font-medium">
              {format(budget.endDate, "PPP")}
            </span>
          </OverviewProperty>
          <OverviewProperty label="Category">
            <span className="text-muted-foreground text-sm font-medium">
              Mock Category
            </span>
          </OverviewProperty>
        </div>
      </div>
    </div>
  );
}
