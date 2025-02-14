import AmountInput from "@/components/amount-input";
import Combobox from "@/components/combobox";
import DatePicker from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Option } from "@/constants/options";
import {
  CreateBudgetBody,
  CreateBudgetBodyType,
} from "@/schemas/budget.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface NewBudgetFormProps {
  onClose: () => void;
  disabled?: boolean;
  categoryOptions: Option[];
}

export default function NewBudgetForm({
  onClose,
  disabled,
  categoryOptions,
}: NewBudgetFormProps) {
  const form = useForm<CreateBudgetBodyType>({
    resolver: zodResolver(CreateBudgetBody),
    defaultValues: {
      name: "",
      amount: "",
      spent: "",
      startDate: undefined,
      endDate: undefined,
      categoryId: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
    onClose();
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4 pt-4">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormControl>
                <Input {...field} id="name" placeholder="Enter budget name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="amount"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="amount">Amount</FormLabel>
              <FormControl>
                <AmountInput
                  {...field}
                  placeholder="0.00"
                  mode="budget"
                  hideIndicator={true}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="spent"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="spent">Spent</FormLabel>
              <FormControl>
                <AmountInput
                  {...field}
                  placeholder="0.00"
                  mode="budget"
                  hideIndicator={true}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="date">Start Date</FormLabel>
              <FormControl>
                <DatePicker
                  value={field.value}
                  onChange={field.onChange}
                  enableFutureTime={true}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="date">End Date</FormLabel>
              <FormControl>
                <DatePicker
                  value={field.value}
                  onChange={field.onChange}
                  enableFutureTime={true}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="categoryId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="category_id">Category</FormLabel>
              <FormControl>
                <Combobox
                  value={field.value}
                  options={categoryOptions}
                  onChange={(value) => {
                    form.setValue("categoryId", value);
                  }}
                  placeholder="Select a category"
                  emptyText="No categories found"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={disabled}>
          Create budget
        </Button>
        <Button
          type="button"
          disabled={disabled}
          onClick={() => form.reset()}
          className="w-full"
          variant="outline"
        >
          Reset
        </Button>
      </form>
    </Form>
  );
}
