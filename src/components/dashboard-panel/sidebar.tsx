import Menu from "@/components/dashboard-panel/menu";
import SidebarToggle from "@/components/dashboard-panel/sidebar-toggle";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/providers/app-provider";
import Link from "next/link";

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useAppContext();

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        sidebarOpen === false ? "w-[90px]" : "w-72"
      )}
    >
      <SidebarToggle open={sidebarOpen} onOpenChange={setSidebarOpen} />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            sidebarOpen === false ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link href="/dashboard">
            <Logo sideBarOpen={sidebarOpen} />
          </Link>
        </Button>
        <Menu open={sidebarOpen} />
      </div>
    </aside>
  );
}
