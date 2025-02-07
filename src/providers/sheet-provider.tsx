"use client";

import EditCategorySheet from "@/app/dashboard/categories/_components/edit-category-sheet";
import NewCategorySheet from "@/app/dashboard/categories/_components/new-category-sheet";
import EditTransactionSheet from "@/app/dashboard/transactions/_components/edit-transaction-sheet";
import NewTransactionSheet from "@/app/dashboard/transactions/_components/new-transaction-sheet";
import { useMountedState } from "react-use";

export default function SheetProvider() {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewTransactionSheet />
      <EditTransactionSheet />

      <NewCategorySheet />
      <EditCategorySheet />
    </>
  );
}
