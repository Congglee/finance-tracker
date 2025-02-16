import { cn } from "@/lib/utils";
import { useOpenCategorySheet } from "@/store/categories/use-open-category-sheet";
import { useOpenTransactionSheet } from "@/store/transactions/use-open-transaction-sheet";
import { TriangleAlert } from "lucide-react";

interface CategoryColumnProps {
  id: string;
  category: string | null;
  categoryId: string | null;
}

export default function CategoryColumn({
  id,
  category,
  categoryId,
}: CategoryColumnProps) {
  const { onOpen: onOpenCategory } = useOpenCategorySheet();
  const { onOpen: onOpenTransaction } = useOpenTransactionSheet();

  const onClick = () => {
    if (categoryId) {
      onOpenCategory(categoryId);
    } else {
      onOpenTransaction(id);
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center cursor-pointer hover:text-primary hover:underline",
        !category && "text-rose-500"
      )}
    >
      {!category && <TriangleAlert className="mr-2 size-4 shrink-0" />}
      {category || "Uncategorized"}
    </div>
  );
}
