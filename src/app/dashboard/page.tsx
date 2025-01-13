import ContentLayout from "@/components/dashboard-panel/content-layout";
import Filters from "@/components/dashboard-panel/filters";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard" breadcrumbs={breadcrumbs}>
      <Filters />
      <div className="py-10">Dashboard</div>
    </ContentLayout>
  );
}
