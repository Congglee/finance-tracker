"use client";

import { useConfirm } from "@/hooks/use-confirm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useOpenTransactionSheet } from "@/store/transactions/use-open-transaction-sheet";

interface TransactionsActionsProps {
  transactionId: string;
}

export default function TransactionActions({
  transactionId,
}: TransactionsActionsProps) {
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure you want to delete this transaction?",
    "You are about to delete this transaction."
  );
  const { onOpen } = useOpenTransactionSheet();

  const handleDelete = async () => {
    const ok = await confirm();

    if (ok) {
      // Delete transaction
      console.log("Delete transaction with id:", transactionId);
    }
  };

  return (
    <>
      <ConfirmDialog />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="size-8 p-0">
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem
            onClick={() => onOpen(transactionId)}
            className="cursor-pointer font-medium p-[10px]"
          >
            <Edit className="size-4 mr-2 stroke-2" />
            Edit Transaction
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleDelete}
            className="cursor-pointer font-medium p-[10px] text-destructive focus:text-destructive/80"
          >
            <Trash className="size-4 mr-2 stroke-2" />
            Delete Transaction
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
