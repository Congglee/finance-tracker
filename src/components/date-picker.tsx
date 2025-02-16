import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { SelectSingleEventHandler } from "react-day-picker";

interface DatePickerProps {
  value?: Date;
  onChange?: SelectSingleEventHandler;
  enableFutureTime?: boolean;
  disabled?: boolean;
}

export default function DatePicker({
  value,
  onChange,
  disabled,
  enableFutureTime = false,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="size-4 mr-2" />
          {value ? format(value, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          captionLayout="dropdown-buttons"
          selected={value}
          defaultMonth={value}
          onSelect={onChange}
          disabled={(date) =>
            (!enableFutureTime && date > new Date()) ||
            date < new Date("1900-01-01")
          }
          fromYear={1960}
          toYear={new Date().getFullYear() + 1}
          id="date"
        />
      </PopoverContent>
    </Popover>
  );
}
