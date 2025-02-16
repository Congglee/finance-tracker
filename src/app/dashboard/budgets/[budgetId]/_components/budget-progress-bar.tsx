import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn, formatCurrency } from "@/lib/utils";

interface BudgetProgressBarProps {
  percentageSpent: number;
  spent: number;
  amount: number;
}

export default function BudgetProgressBar({
  percentageSpent,
  spent,
  amount,
}: BudgetProgressBarProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative w-full cursor-pointer">
            <Progress
              value={percentageSpent}
              className={`h-5 ${spent > amount ? "bg-destructive/20" : ""}`}
            />
            <div className="text-xs absolute top-1/2 -translate-y-1/2 left-4 overflow-hidden font-semibold">
              {formatCurrency(spent)} of {formatCurrency(amount)}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="px-3 py-2 text-xs">
          <div className="space-y-2">
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Total Budget:</span>
              <span className="font-medium">{formatCurrency(amount)}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Spent:</span>
              <span className="font-medium">{formatCurrency(spent)}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Progress:</span>
              <span
                className={cn(
                  "font-medium",
                  spent > amount && "text-destructive"
                )}
              >
                {percentageSpent.toFixed(1)}%
              </span>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
