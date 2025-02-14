import CategoryFilter from "@/app/dashboard/transactions/_components/category-filter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { Download, Trash, X } from "lucide-react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterKey: string;

  onConfirmDelete: () => Promise<void>;
  onExportCSV?: () => void;
  disabled?: boolean;
}

export default function DataTableToolbar<TData>({
  table,
  filterKey,
  onConfirmDelete,
  onExportCSV,
  disabled = false,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const allColumns = table.getAllColumns();

  const hasCategoryColumn = allColumns.find(
    (column) => column.id === "category"
  );

  return (
    <div className="flex w-full items-center justify-between gap-2 overflow-auto px-1 py-2 my-2 scroll">
      <div className="flex flex-1 items-center gap-2">
        <Input
          placeholder={`Filter ${filterKey}...`}
          value={(table.getColumn(filterKey)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(filterKey)?.setFilterValue(event.target.value)
          }
          className="h-9 w-40 lg:w-64"
        />
        {hasCategoryColumn && (
          <CategoryFilter column={table.getColumn("category")} />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2">
        {table.getFilteredSelectedRowModel().rows.length > 0 && (
          <Button
            disabled={disabled}
            size="sm"
            variant="destructive"
            className="lg:flex"
            onClick={onConfirmDelete}
          >
            <Trash />
            Delete ({table.getFilteredSelectedRowModel().rows.length})
          </Button>
        )}
        <Button
          variant="outline"
          size="sm"
          className="lg:flex gap-2.5"
          onClick={() => {
            onExportCSV && onExportCSV();
          }}
        >
          <Download />
          Export CSV
        </Button>
      </div>
    </div>
  );
}
