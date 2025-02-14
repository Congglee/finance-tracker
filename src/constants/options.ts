import { LucideIcon } from "lucide-react";

export type Option<T = string> = {
  label: string;
  value: T;
  icon?: LucideIcon;
};

export const categoryOptions: Option[] = [
  {
    label: "Utilities 🛠",
    value: "d4de16df-0659-45f5-a3fc-b7dcfd98564e",
    icon: undefined,
  },
  {
    label: "Rent 🏠",
    value: "f7a378de-a5a2-4ce6-a554-bc5daadf88bc",
    icon: undefined,
  },
  {
    label: "Clothing 👕",
    value: "ed526311-db5a-4194-8e5a-5281b727796f",
    icon: undefined,
  },
  {
    label: "Other 🛒",
    value: "0e83519a-0c87-4334-a776-30f16735fde2",
    icon: undefined,
  },
  {
    label: "Food 🍔",
    value: "5a6011c4-8096-4abe-8322-3591f5724923",
    icon: undefined,
  },
  {
    label: "Transportation 🚗",
    value: "266279fd-6126-416f-85d4-a455bce9fb3f",
    icon: undefined,
  },
  {
    label: "Entertainment 🎬",
    value: "7d0c50d1-eeb7-47ed-b660-7ff85daaa47f",
    icon: undefined,
  },
];

export const accountOptions: Option[] = [
  {
    label: "Checking Account",
    value: "295e2706-a6d3-40fe-ad5d-87e8b0db239b",
  },
  {
    label: "Savings Account",
    value: "4c2b7b5b-7b9e-4c4a-9c7d-0b5d4f5f4c3d",
  },
  {
    label: "Credit Card",
    value: "b2b9e1f2-9b1d-4a4f-9a8b-2d7b3e4b2f1d",
  },
  {
    label: "Cash",
    value: "d4de16df-0659-45f5-a3fc-b7dcfd98564e",
  },
  {
    label: "Investment Account",
    value: "f7a378de-a5a2-4ce6-a554-bc5daadf88bc",
  },
  {
    label: "Loan",
    value: "ed526311-db5a-4194-8e5a-5281b727796f",
  },
  {
    label: "Other",
    value: "0e83519a-0c87-4334-a776-30f16735fde2",
  },
];
