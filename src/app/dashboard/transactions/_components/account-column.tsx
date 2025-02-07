import { useOpenAccount } from "@/store/accounts/use-open-account";

interface AccountColumnProps {
  account: string | null;
  accountId: string | null;
}

export default function AccountColumn({
  account,
  accountId,
}: AccountColumnProps) {
  const { onOpen: onOpenAccount } = useOpenAccount();

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
