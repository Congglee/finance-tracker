import CategoriesClient from "@/app/dashboard/categories/client";
import ContentLayout from "@/components/dashboard-panel/content-layout";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Categories", href: "/dashboard/categories" },
];

export default function CategoriesPage() {
  return (
    <ContentLayout title="Categories" breadcrumbs={breadcrumbs}>
      <div className="mt-8 space-y-8">
        <CategoriesClient />
      </div>
    </ContentLayout>
  );
}
