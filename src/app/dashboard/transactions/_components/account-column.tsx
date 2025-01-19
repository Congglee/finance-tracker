interface AccountColumnProps {
  account: string | null;
  accountId: string | null;
}

export default function AccountColumn({
  account,
  accountId,
}: AccountColumnProps) {
  return (
    <div
      onClick={() => {}}
      className="flex items-center cursor-pointer hover:text-primary hover:underline"
    >
      {account}
    </div>
  );
}
