import { cn } from "@/lib/utils";
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
  return (
    <div
      onClick={() => {}}
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
