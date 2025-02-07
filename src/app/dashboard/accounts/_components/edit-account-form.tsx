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
import {
  UpdateAccountBody,
  UpdateAccountBodyType,
} from "@/schemas/account.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface EditAccountFormProps {
  onClose: () => void;
  initialValues: any; // TODO: Replace any with data type from response data
  disabled?: boolean;
}

export default function EditAccountForm({
  onClose,
  initialValues,
  disabled,
}: EditAccountFormProps) {
  const form = useForm<UpdateAccountBodyType>({
    resolver: zodResolver(UpdateAccountBody),
    defaultValues: { name: "" },
  });

  useEffect(() => {
    if (initialValues) {
      const { name } = initialValues;
      form.reset({ name });
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
                  disabled={disabled}
                  placeholder="e.g. Food, Travel, etc."
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
