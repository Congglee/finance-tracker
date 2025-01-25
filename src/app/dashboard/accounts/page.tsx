import AccountsClient from "@/app/dashboard/accounts/client";
import ContentLayout from "@/components/dashboard-panel/content-layout";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Accounts", href: "/dashboard/accounts" },
];

export default function AccountsPage() {
  return (
    <ContentLayout title="Accounts" breadcrumbs={breadcrumbs} hasFilters>
      <div className="mt-8 space-y-8">
        <AccountsClient />
      </div>
    </ContentLayout>
  );
}
