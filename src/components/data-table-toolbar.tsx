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

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-y-2">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <Input
          placeholder={`Filter ${filterKey}...`}
          value={(table.getColumn(filterKey)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(filterKey)?.setFilterValue(event.target.value)
          }
          className="h-9 w-full md:max-w-sm"
        />
        {table.getColumn("category") &&
          table.getColumn("category")?.getCanFilter() && (
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
      <div className="flex items-center gap-2.5">
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
