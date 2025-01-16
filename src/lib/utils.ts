import { clsx, type ClassValue } from "clsx";
import { format, subDays } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

export function formatPercentage(
  value: number,
  options: { addPrefix?: boolean } = {
    addPrefix: false,
  }
) {
  const result = new Intl.NumberFormat("en-US", {
    style: "percent",
  }).format(value / 100);

  if (options.addPrefix && value > 0) {
    return `+${result}`;
  }

  return result;
}

type Period = {
  from: string | Date | undefined;
  to: string | Date | undefined;
};

export function formatDateRange(period?: Period) {
  const defaultTo = new Date();
  const defaultFrom = subDays(defaultTo, 30);

  if (!period?.from) {
    return `${format(defaultFrom, "LLL dd")} - ${format(
      defaultTo,
      "LLL dd, y"
    )}`;
  }

  if (period.to) {
    return `${format(period.from, "LLL dd, y")} - ${format(
      period.to,
      "LLL dd, y"
    )}`;
  }

  return format(period.from, "LLL dd, y");
}
