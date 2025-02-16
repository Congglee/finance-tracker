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
import { useOpenAccountSheet } from "@/store/accounts/use-open-account-sheet";

interface AccountActionsProps {
  accountId: string;
}

export default function AccountActions({ accountId }: AccountActionsProps) {
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure you want to delete this account?",
    "You are about to delete this account."
  );

  const { onOpen } = useOpenAccountSheet();

  const handleDelete = async () => {
    const ok = await confirm();

    if (ok) {
      // Delete account
      console.log("Delete account with id:", accountId);
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
            disabled={false}
            onClick={() => onOpen(accountId)}
            className="cursor-pointer font-medium p-[10px]"
          >
            <Edit className="size-4 mr-2 stroke-2" />
            Edit Account
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={false}
            onClick={handleDelete}
            className="cursor-pointer font-medium p-[10px] text-destructive focus:text-destructive/80"
          >
            <Trash className="size-4 mr-2 stroke-2" />
            Delete Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
