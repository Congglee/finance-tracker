import DashboardNav from "@/components/dashboard-panel/dashboard-nav";
import Filters from "@/components/dashboard-panel/filters";
import WelcomeMsg from "@/components/dashboard-panel/welcome-msg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
  breadcrumbs: { name: string; href: string }[];
}

export default function ContentLayout({
  title,
  children,
  breadcrumbs = [],
}: ContentLayoutProps) {
  return (
    <>
      <DashboardNav title={title} />
      <div className="container py-8 px-4 sm:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb) => {
              const isLastBreadcrumb =
                breadcrumbs.indexOf(breadcrumb) === breadcrumbs.length - 1;
              return (
                <>
                  <BreadcrumbItem key={breadcrumb.name}>
                    <BreadcrumbLink asChild>
                      <Link href={breadcrumb.href}>{breadcrumb.name}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {!isLastBreadcrumb && <BreadcrumbSeparator />}
                </>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
        <WelcomeMsg />
        {children}
      </div>
    </>
  );
}
