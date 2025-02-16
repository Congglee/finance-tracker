import EditTransactionForm from "@/app/dashboard/transactions/_components/edit-transaction-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { transactions } from "@/constants/mock-data";
import { accountOptions, categoryOptions } from "@/constants/options";
import { useOpenTransactionSheet } from "@/store/transactions/use-open-transaction-sheet";
import { Loader2 } from "lucide-react";

export default function EditTransactionSheet() {
  const { isOpen, onClose, id } = useOpenTransactionSheet();

  const isPending = false;

  const isLoading = false;

  const transaction = transactions.find((t) => t.id === id);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 w-full sm:max-w-md overflow-y-auto scroll">
        <SheetHeader>
          <SheetTitle>Edit Transaction</SheetTitle>
          <SheetDescription>Edit an existing transaction</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <EditTransactionForm
            categoryOptions={categoryOptions ?? []}
            accountOptions={accountOptions ?? []}
            onClose={onClose}
            initialValues={transaction}
            disabled={isPending}
          />
        )}
      </SheetContent>
    </Sheet>
  );
}
