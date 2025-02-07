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
  CreateAccountBody,
  CreateAccountBodyType,
} from "@/schemas/account.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface NewAccountFormProps {
  disabled?: boolean;
  onClose: () => void;
}

export default function NewAccountForm({
  onClose,
  disabled,
}: NewAccountFormProps) {
  const form = useForm<CreateAccountBodyType>({
    resolver: zodResolver(CreateAccountBody),
    defaultValues: { name: "" },
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
                <Input
                  {...field}
                  id="name"
                  disabled={disabled}
                  placeholder="e.g. Cash, Bank, Credit Card"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={disabled}>
          Create account
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
