"use client";

import { columns } from "@/app/dashboard/categories/_components/columns";
import DataTable from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { categories } from "@/constants/mock-data";
import { PlusCircle } from "lucide-react";

export default function CategoriesClient() {
  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
        <CardTitle className="font-medium text-xl line-clamp-1">
          Categories Page
        </CardTitle>
        <div className="flex flex-col lg:flex-row items-center gap-2">
          <Button
            size="sm"
            onClick={() => {}}
            className="w-full lg:w-auto bg-[#4CAF50]"
          >
            <PlusCircle className="size-4 mr-2" />
            Add new
          </Button>
        </div>
      </CardHeader>
      <div className="px-6">
        <Separator />
      </div>
      <CardContent>
        <DataTable
          filterKey="name"
          columns={columns}
          data={categories}
          onDelete={() => {}}
          disabled={false}
        />
      </CardContent>
    </Card>
  );
}
