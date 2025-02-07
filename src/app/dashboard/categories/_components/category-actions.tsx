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

interface CategoryActionsProps {
  categoryId: string;
}

export default function CategoryActions({ categoryId }: CategoryActionsProps) {
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure you want to delete this category?",
    "You are about to delete this category."
  );

  const handleDelete = async () => {
    const ok = await confirm();

    if (ok) {
      // Delete category
      console.log("Delete category with id:", categoryId);
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
