import ContentLayout from "@/components/dashboard-panel/content-layout";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Budgets", href: "/dashboard/budgets" },
];

export default function BudgetsPage() {
  return (
    <ContentLayout title="Budgets" breadcrumbs={breadcrumbs}>
      <div className="mt-8 space-y-8">Budgets Page</div>
    </ContentLayout>
  );
}
