import {
  ArrowLeftRight,
  Bookmark,
  LayoutGrid,
  LucideIcon,
  Settings,
  WalletCards,
  WalletMinimal,
} from "lucide-react";

export type Submenu = {
  href: string;
  label: string;
};

export type MenuGroup = {
  label: string;
  menus: {
    href: string;
    label: string;
    icon: LucideIcon;
    submenus: Submenu[];
  }[];
};

export const menuList: MenuGroup[] = [
  {
    label: "",
    menus: [
      {
        href: "/dashboard",
        label: "Dashboard",
        icon: LayoutGrid,
        submenus: [],
      },
    ],
  },
  {
    label: "Contents",
    menus: [
      {
        href: "",
        label: "Transactions",
        icon: ArrowLeftRight,
        submenus: [
          // {
          //   href: "/dashboard/transactions",
          //   label: "All Transactions",
          // },
          // {
          //   href: "/dashboard/transactions/new",
          //   label: "New Transaction",
          // },
        ],
      },
      {
        href: "/dashboard/accounts",
        label: "Accounts",
        icon: WalletCards,
        submenus: [],
      },
      {
        href: "/dashboard/categories",
        label: "Categories",
        icon: Bookmark,
        submenus: [],
      },
      {
        href: "/dashboard/budgets",
        label: "Budgets",
        icon: WalletMinimal,
        submenus: [],
      },
    ],
  },
  {
    label: "Settings",
    menus: [
      {
        href: "/dashboard/settings",
        label: "Settings",
        icon: Settings,
        submenus: [],
      },
    ],
  },
];
