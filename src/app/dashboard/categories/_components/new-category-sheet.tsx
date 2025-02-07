import NewCategoryForm from "@/app/dashboard/categories/_components/new-category-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useNewCategory } from "@/store/categories/use-new-category";
import { Loader2 } from "lucide-react";

export default function NewCategorySheet() {
  const { isOpen, onClose } = useNewCategory();

  const isPending = false;

  const isLoading = false;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 w-full sm:max-w-md overflow-y-auto scroll">
        <SheetHeader>
          <SheetTitle>New Category</SheetTitle>
          <SheetDescription>
            Create a new category to organize your transactions.
          </SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <NewCategoryForm onClose={onClose} disabled={isPending} />
        )}
      </SheetContent>
    </Sheet>
  );
}
