import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Info, MinusCircle, PlusCircle } from "lucide-react";
import CurrencyInput from "react-currency-input-field";

type Mode = "transaction" | "budget";

interface AmountInputProps {
  value: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  mode?: Mode;
  hideIndicator?: boolean; // Optional prop to hide the +/- indicator
}

export default function AmountInput({
  value,
  onChange,
  placeholder,
  disabled,
  mode = "transaction",
  hideIndicator = false,
}: AmountInputProps) {
  const parsedValue = parseFloat(value);

  const isTransactionMode = mode === "transaction";
  const isBudgetMode = mode === "budget";

  const isInCome = parsedValue > 0;
  const isExpense = parsedValue < 0;

  const onReverseValue = () => {
    if (!value || isBudgetMode) {
      return;
    }

    const newValue = (parsedValue * -1).toString();
    onChange(newValue.toString());
  };

  const onValueChange = (value: string | undefined) => {
    if (isBudgetMode && value) {
      // Ensure only positive values for budget mode
      const numValue = parseFloat(value);
      if (numValue < 0) {
        onChange(Math.abs(numValue).toString());
        return;
      }
    }

    onChange(value);
  };

  return (
    <div className="relative">
      {!hideIndicator && (
        <TooltipProvider>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={onReverseValue}
                className={cn(
                  "bg-slate-400 hover:bg-slate-500 absolute top-1.5 left-1.5 rounded-md p-2 flex items-center justify-center transition",
                  isInCome && "bg-emerald-500 hover:bg-emerald-600",
                  isExpense && "bg-rose-500 hover:bg-rose-600",
                  isBudgetMode && "cursor-default"
                )}
              >
                {!value && <Info className="size-3 text-white" />}
                {isInCome && <PlusCircle className="size-3 text-white" />}
                {isExpense && <MinusCircle className="size-3 text-white" />}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              {isTransactionMode
                ? "Use [+] for income and [-] for expenses"
                : "Only positive values allowed"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      <CurrencyInput
        id="amount"
        prefix="$"
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          !hideIndicator && "pl-10"
        )}
        placeholder={placeholder}
        value={value}
        decimalsLimit={2}
        decimalScale={2}
        onValueChange={onValueChange}
        disabled={disabled}
      />
      {mode === "transaction" && (
        <p className="text-xs text-muted-foreground mt-2">
          {isInCome && "This will count as income"}
          {isExpense && "This will count as expense"}
        </p>
      )}
    </div>
  );
}
