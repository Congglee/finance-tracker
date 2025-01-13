import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

export default function UserNav() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-9 hover:opacity-75 transition">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="font-medium flex items-center justify-center">
            CN
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className="w-56"
        sideOffset={10}
      >
        <div className="flex flex-col items-center justify-center gap-2 px-2.5 py-4">
          <Avatar className="size-[52px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-xl font-medium flex items-center justify-center">
              CN
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-medium text-primary dark:text-secondary">
              CN
            </p>
            <p className="text-xs text-muted-foreground">example@gmail.com</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="h-9 px-4 font-medium cursor-pointer">
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem className="h-9 px-4 font-medium cursor-pointer">
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="h-9 px-4 font-medium cursor-pointer">
          <LogOut className="size-4 mr-2" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
