import EditCategoryForm from "@/app/dashboard/categories/_components/edit-category-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { categories } from "@/constants/mock-data";
import { useOpenCategorySheet } from "@/store/categories/use-open-category-sheet";
import { Loader2 } from "lucide-react";

export default function EditCategorySheet() {
  const { isOpen, onClose, id } = useOpenCategorySheet();

  const isPending = false;

  const isLoading = false;

  const category = categories.find((c) => c.id === id);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 w-full sm:max-w-md overflow-y-auto scroll">
        <SheetHeader>
          <SheetTitle>Edit Category</SheetTitle>
          <SheetDescription>Edit an existing category</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <EditCategoryForm
            onClose={onClose}
            initialValues={category}
            disabled={isPending}
          />
        )}
      </SheetContent>
    </Sheet>
  );
}
