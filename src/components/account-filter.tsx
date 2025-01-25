"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { accounts } from "@/constants/mock-data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

export default function AccountFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const accountId = params.get("account_id") || "all";
  const from = params.get("from") || "";
  const to = params.get("to") || "";

  const onChange = (newValue: string) => {
    const query = { account_id: newValue, from, to };

    if (newValue === "all") {
      query.account_id = "";
    }

    const url = qs.stringifyUrl(
      { url: pathname, query },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  };

  return (
    <Select value={accountId} onValueChange={onChange} disabled={false}>
      <SelectTrigger className="lg:w-auto w-full h-9 rounded-md px-3 font-normal border-none focus:ring-offset-0 focus:ring-transparent outline-none transition">
        <SelectValue placeholder="Select account" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All accounts</SelectItem>
        {accounts?.map((account) => (
          <SelectItem key={account.id} value={account.id}>
            {account.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
