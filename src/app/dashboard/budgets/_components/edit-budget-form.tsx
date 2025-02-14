import { Option } from "@/constants/options";
import {
  UpdateBudgetBody,
  UpdateBudgetBodyType,
} from "@/schemas/budget.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AmountInput from "@/components/amount-input";
import DatePicker from "@/components/date-picker";
import Combobox from "@/components/combobox";
import { Button } from "@/components/ui/button";

interface EditBudgetFormProps {
  categoryOptions: Option[];
  onClose: () => void;
  initialValues: any; // TODO: Replace any with data type from response data
  disabled?: boolean;
}

export default function EditBudgetForm({
  categoryOptions,
  onClose,
  initialValues,
  disabled,
}: EditBudgetFormProps) {
  const form = useForm<UpdateBudgetBodyType>({
    resolver: zodResolver(UpdateBudgetBody),
    defaultValues: {
      name: "",
      amount: "",
      spent: "",
      startDate: undefined,
      endDate: undefined,
      categoryId: "",
    },
  });

  useEffect(() => {
    if (initialValues) {
      const { name, amount, spent, startDate, endDate, categoryId } =
        initialValues;
      form.reset({
        name,
        amount: amount.toString(),
        spent: spent.toString(),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        categoryId,
      });
    }
  }, [initialValues, form]);

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
          Save changes
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
