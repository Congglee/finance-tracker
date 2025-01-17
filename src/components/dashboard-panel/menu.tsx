"use client";

import CollapseMenuButton from "@/components/dashboard-panel/collapse-menu-button";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { menuList } from "@/constants/menu-list";
import { cn } from "@/lib/utils";
import { Ellipsis, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps {
  open: boolean;
}

export default function Menu({ open }: MenuProps) {
  const pathname = usePathname();

  const checkMenuActiveLink = (href: string) => {
    if (href === "") {
      return false;
    }

    if (href === "/dashboard") {
      return pathname === href;
    }

    return pathname.includes(href);
  };

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="lg:mt-6 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-40px)] lg:min-h-[calc(100vh-32px-40px-36px)] items-start space-y-1 px-2">
          {menuList.map(({ label, menus }, index) => (
            <li className={cn("w-full", label && "pt-5")} key={index}>
              {(open && label) || open === undefined ? (
                <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                  {label}
                </p>
              ) : !open && open !== undefined && label ? (
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger className="w-full">
                      <div className="w-full flex justify-center items-center">
                        <Ellipsis className="h-5 w-5" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <p className="pb-2" />
              )}
              {menus.map(({ href, label, icon: Icon, submenus }, index) => {
                const active = checkMenuActiveLink(href);

                return submenus.length === 0 ? (
                  <div className="w-full" key={index}>
                    <TooltipProvider disableHoverableContent>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                          <Button
                            variant={active ? "secondary" : "ghost"}
                            className="w-full justify-start h-10 mb-1 [&_svg]:size-[18px] gap-0"
                            asChild
                          >
                            <Link href={href}>
                              <span
                                className={cn(open === false ? "" : "mr-4")}
                              >
                                <Icon />
                              </span>
                              <p
                                className={cn(
                                  "max-w-[200px] truncate",
                                  open === false
                                    ? "-translate-x-96 opacity-0"
                                    : "translate-x-0 opacity-100"
                                )}
                              >
                                {label}
                              </p>
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        {open === false && (
                          <TooltipContent side="right">{label}</TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                ) : (
                  <div className="w-full" key={index}>
                    <CollapseMenuButton
                      icon={Icon}
                      label={label}
                      active={active}
                      submenus={submenus}
                      open={open}
                    />
                  </div>
                );
              })}
            </li>
          ))}
          <li className="w-full grow flex items-end">
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    // onClick={handleSignOut}
                    variant="outline"
                    className="w-full justify-center h-10 mt-5"
                  >
                    <span className={cn(open === false ? "" : "mr-4")}>
                      <LogOut size={18} />
                    </span>
                    <p
                      className={cn(
                        "whitespace-nowrap",
                        open === false ? "opacity-0 hidden" : "opacity-100"
                      )}
                    >
                      Sign out
                    </p>
                  </Button>
                </TooltipTrigger>
                {open === false && (
                  <TooltipContent side="right">
                    <button
                    // onClick={handleSignOut}
                    >
                      Sign out
                    </button>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
}
