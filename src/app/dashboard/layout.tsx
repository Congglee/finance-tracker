import DashboardPanelLayout from "@/components/dashboard-panel/dashboard-panel-layout";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <DashboardPanelLayout>{children}</DashboardPanelLayout>;
}
