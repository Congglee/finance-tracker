import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useConfirm } from "@/hooks/use-confirm";
import { useOpenBudgetSheet } from "@/store/budgets/use-open-budget-sheet";
import { Ellipsis, ExternalLinkIcon, SquarePen, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface BudgetActionsProps {
  budgetId: string;
}

export default function BudgetActions({ budgetId }: BudgetActionsProps) {
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure you want to delete this budget?",
    "You are about to delete this budget."
  );
  const router = useRouter();

  const { onOpen } = useOpenBudgetSheet();

  const handleDelete = async () => {
    const ok = await confirm();

    if (ok) {
      // Delete budget
      console.log("Delete budget with id:", budgetId);
    }
  };

  const onOpenBudget = () => {
    router.push(`/dashboard/budgets/${budgetId}`);
  };

  return (
    <>
      <ConfirmDialog />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="size-8 p-0">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem
            onClick={onOpenBudget}
            className="cursor-pointer font-medium p-[10px]"
          >
            <ExternalLinkIcon className="size-4 mr-2 stroke-2" />
            Budget Details
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer font-medium p-[10px]"
            onClick={() => onOpen(budgetId)}
          >
            <SquarePen className="size-4 mr-2 stroke-2" />
            Edit Budget
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer font-medium p-[10px] text-destructive focus:text-destructive/80"
            onClick={handleDelete}
          >
            <Trash2 className="size-4 mr-2 stroke-2" />
            Delete Budget
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
