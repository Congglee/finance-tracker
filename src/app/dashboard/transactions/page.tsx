import TransactionsClient from "@/app/dashboard/transactions/client";
import ContentLayout from "@/components/dashboard-panel/content-layout";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Transactions", href: "/dashboard/transactions" },
];

export default function TransactionsPage() {
  return (
    <ContentLayout title="Transactions" breadcrumbs={breadcrumbs} hasFilters>
      <div className="mt-8 space-y-8">
        <TransactionsClient />
      </div>
    </ContentLayout>
  );
}
