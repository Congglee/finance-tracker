import DashboardNav from "@/components/dashboard-panel/dashboard-nav";
import Filters from "@/components/dashboard-panel/filters";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Fragment } from "react";
import DashboardHeading from "@/components/dashboard-panel/dashboard-heading";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
  breadcrumbs?: { name: string; href: string }[];
  hasFilters?: boolean;
  heading?: string;
  description?: string;
}

export default function ContentLayout({
  title,
  children,
  breadcrumbs = [],
  hasFilters = true,
  heading,
  description,
}: ContentLayoutProps) {
  return (
    <>
      <DashboardNav title={title} />
      <div className="container py-8 px-4 sm:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => {
              const isLastBreadcrumb =
                breadcrumbs.indexOf(breadcrumb) === breadcrumbs.length - 1;
              return (
                <Fragment key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href={breadcrumb.href}>{breadcrumb.name}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {!isLastBreadcrumb && <BreadcrumbSeparator />}
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="space-y-4">
          <DashboardHeading heading={heading} description={description} />
          {hasFilters && <Filters />}
        </div>
        {children}
      </div>
    </>
  );
}
