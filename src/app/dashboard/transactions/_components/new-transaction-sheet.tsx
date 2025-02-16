import NewTransactionForm from "@/app/dashboard/transactions/_components/new-transaction-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { accountOptions, categoryOptions } from "@/constants/options";
import { useNewTransactionSheet } from "@/store/transactions/use-new-transaction-sheet";
import { Loader2 } from "lucide-react";

export default function NewTransactionSheet() {
  const { isOpen, onClose } = useNewTransactionSheet();

  const isPending = false;

  const isLoading = false;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 w-full sm:max-w-md overflow-y-auto scroll">
        <SheetHeader>
          <SheetTitle>New Transaction</SheetTitle>
          <SheetDescription>
            Create a new transaction to track your transactions.
          </SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <NewTransactionForm
            categoryOptions={categoryOptions ?? []}
            accountOptions={accountOptions ?? []}
            onClose={onClose}
            disabled={isPending}
          />
        )}
      </SheetContent>
    </Sheet>
  );
}
