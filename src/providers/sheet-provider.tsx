"use client";

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
    </>
  );
}
