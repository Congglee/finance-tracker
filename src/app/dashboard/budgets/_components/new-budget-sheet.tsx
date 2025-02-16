import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Loader2 } from "lucide-react";
import NewBudgetForm from "@/app/dashboard/budgets/_components/new-budget-form";
import { categoryOptions } from "@/constants/options";
import { useNewBudgetSheet } from "@/store/budgets/use-new-budget-sheet";

export default function NewBudgetSheet() {
  const { isOpen, onClose } = useNewBudgetSheet();

  const isPending = false;

  const isLoading = false;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 w-full sm:max-w-md overflow-y-auto scroll">
        <SheetHeader>
          <SheetTitle>New Budget</SheetTitle>
          <SheetDescription>
            Create a new budget to track your expenses.
          </SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <NewBudgetForm
            categoryOptions={categoryOptions ?? []}
            onClose={onClose}
            disabled={isPending}
          />
        )}
      </SheetContent>
    </Sheet>
  );
}
