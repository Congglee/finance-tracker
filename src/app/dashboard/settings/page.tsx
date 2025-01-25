import SettingsClient from "@/app/dashboard/settings/client";
import ContentLayout from "@/components/dashboard-panel/content-layout";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function SettingsPage() {
  return (
    <ContentLayout
      title="Settings"
      breadcrumbs={breadcrumbs}
      hasFilters={false}
      heading="Your Settings ⚙️"
      description="Manage your settings here"
    >
      <div className="mt-8 space-y-8">
        <SettingsClient />
      </div>
    </ContentLayout>
  );
}
