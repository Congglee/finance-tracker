import EditAccountForm from "@/app/dashboard/accounts/_components/edit-account-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { accounts } from "@/constants/mock-data";
import { useOpenAccountSheet } from "@/store/accounts/use-open-account-sheet";
import { Loader2 } from "lucide-react";

export default function EditAccountSheet() {
  const { isOpen, onClose, id } = useOpenAccountSheet();

  const isPending = false;

  const isLoading = false;

  const account = accounts.find((a) => a.id === id);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 w-full sm:max-w-md overflow-y-auto scroll">
        <SheetHeader>
          <SheetTitle>Edit Account</SheetTitle>
          <SheetDescription>Edit an existing account</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <EditAccountForm
            onClose={onClose}
            initialValues={account}
            disabled={isPending}
          />
        )}
      </SheetContent>
    </Sheet>
  );
}
