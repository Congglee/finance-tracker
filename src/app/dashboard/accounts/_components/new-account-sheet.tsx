import NewAccountForm from "@/app/dashboard/accounts/_components/new-account-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useNewAccount } from "@/store/accounts/use-new-account";
import { Loader2 } from "lucide-react";

export default function NewAccountSheet() {
  const { isOpen, onClose } = useNewAccount();

  const isPending = false;

  const isLoading = false;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 w-full sm:max-w-md overflow-y-auto scroll">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions.
          </SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <NewAccountForm onClose={onClose} disabled={isPending} />
        )}
      </SheetContent>
    </Sheet>
  );
}
