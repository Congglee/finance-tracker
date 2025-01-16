import SheetMenu from "@/components/dashboard-panel/sheet-menu";
import ModeToggle from "@/components/mode-toggle";
import UserNav from "@/components/user-nav";

interface DashboardNavProps {
  title: string;
}

export default function DashboardNav({ title }: DashboardNavProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-accent">
      <div className="px-4 sm:px-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h4 className="font-bold">{title}</h4>
        </div>
        <div className="flex flex-1 items-center space-x-4 justify-end">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
