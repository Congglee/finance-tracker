import { useOpenAccountSheet } from "@/store/accounts/use-open-account-sheet";

interface AccountColumnProps {
  account: string | null;
  accountId: string | null;
}

export default function AccountColumn({
  account,
  accountId,
}: AccountColumnProps) {
  const { onOpen: onOpenAccount } = useOpenAccountSheet();

  const onClick = () => {
    onOpenAccount(accountId as string);
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center cursor-pointer hover:text-primary hover:underline"
    >
      {account}
    </div>
  );
}
