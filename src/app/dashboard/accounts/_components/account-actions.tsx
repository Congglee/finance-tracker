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

interface AccountActionsProps {
  id: string;
}

export default function AccountActions({ id }: AccountActionsProps) {
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure you want to delete this account?",
    "You are about to delete this account."
  );

  const handleDelete = async () => {
    const ok = await confirm();

    if (ok) {
      // Delete account
      console.log("Delete account with id:", id);
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
            onClick={() => {}}
            className="font-medium p-2"
          >
            <Edit className="size-4 mr-2 stroke-2" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={false}
            onClick={handleDelete}
            className="font-medium p-2 text-destructive focus:text-destructive/80"
          >
            <Trash className="size-4 mr-2 stroke-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
