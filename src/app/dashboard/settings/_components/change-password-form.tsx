import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  ChangePasswordBody,
  ChangePasswordBodyType,
} from "@/schemas/account.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ChangePasswordForm() {
  const form = useForm<ChangePasswordBodyType>({
    resolver: zodResolver(ChangePasswordBody),
    defaultValues: {
      old_password: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  const reset = () => {
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        noValidate
        className="grid auto-rows-max items-start gap-4 md:gap-8"
        onSubmit={onSubmit}
        onReset={reset}
      >
        <Card>
          <CardHeader>
            <CardTitle className="font-medium text-xl">
              Change password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <FormField
                control={form.control}
                name="old_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="old_password">Old password</FormLabel>
                    <FormControl>
                      <Input
                        id="old_password"
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">New password</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="confirm_password">
                      Confirm new password
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="confirm_password"
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start md:items-center md:flex-row gap-2">
            <Button type="submit" className="w-full md:w-auto" disabled={false}>
              Save changes
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="w-full md:w-auto"
              disabled={false}
              onClick={() => {}}
            >
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
