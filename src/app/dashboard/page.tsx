import DataCharts from "@/app/dashboard/_components/data-charts";
import DataGrid from "@/app/dashboard/_components/data-grid";
import ContentLayout from "@/components/dashboard-panel/content-layout";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard" breadcrumbs={breadcrumbs}>
      <div className="mt-8 space-y-8">
        <DataGrid />
        <DataCharts />
      </div>
    </ContentLayout>
  );
}
