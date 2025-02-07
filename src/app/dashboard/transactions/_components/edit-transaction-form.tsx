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
import { Textarea } from "@/components/ui/textarea";
import { Option } from "@/constants/options";
import {
  UpdateTransactionBody,
  UpdateTransactionBodyType,
} from "@/schemas/transaction.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface EditTransactionFormProps {
  categoryOptions: Option[];
  accountOptions: Option[];
  onClose: () => void;
  initialValues: any; // TODO: Replace any with data type from response data
  disabled?: boolean;
}

export default function EditTransactionForm({
  categoryOptions,
  accountOptions,
  onClose,
  initialValues,
  disabled,
}: EditTransactionFormProps) {
  const form = useForm<UpdateTransactionBodyType>({
    resolver: zodResolver(UpdateTransactionBody),
    defaultValues: {
      name: "",
      amount: "",
      payee: "",
      notes: "",
      date: new Date(),
      categoryId: "",
      accountId: "",
    },
  });

  useEffect(() => {
    if (initialValues) {
      const { name, amount, payee, notes, date, categoryId, accountId } =
        initialValues;
      form.reset({
        name,
        amount,
        payee,
        notes,
        date: new Date(date),
        categoryId,
        accountId,
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
                <Input
                  {...field}
                  id="name"
                  placeholder="Enter transaction name"
                />
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
                <AmountInput {...field} placeholder="0.00" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="payee"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="payee">Payee</FormLabel>
              <FormControl>
                <Input {...field} id="payee" placeholder="Enter payee name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="notes"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="notes">Notes</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  id="notes"
                  value={field.value ?? ""}
                  placeholder="Optional notes"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="date">Date</FormLabel>
              <FormControl>
                <DatePicker value={field.value} onChange={field.onChange} />
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
        <FormField
          name="accountId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="account_id">Account</FormLabel>
              <FormControl>
                <Combobox
                  value={field.value}
                  options={accountOptions}
                  onChange={(value) => {
                    form.setValue("accountId", value);
                  }}
                  placeholder="Select an account"
                  emptyText="No accounts found"
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
