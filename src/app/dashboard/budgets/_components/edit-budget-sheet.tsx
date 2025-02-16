import { budgets } from "@/constants/mock-data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Loader2 } from "lucide-react";
import EditBudgetForm from "@/app/dashboard/budgets/_components/edit-budget-form";
import { categoryOptions } from "@/constants/options";
import { useOpenBudgetSheet } from "@/store/budgets/use-open-budget-sheet";

export default function EditBudgetSheet() {
  const { isOpen, onClose, id } = useOpenBudgetSheet();

  const isPending = false;

  const isLoading = false;

  const budget = budgets.find((t) => t.id === id);

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
          <EditBudgetForm
            categoryOptions={categoryOptions ?? []}
            onClose={onClose}
            initialValues={budget}
            disabled={isPending}
          />
        )}
      </SheetContent>
    </Sheet>
  );
}
