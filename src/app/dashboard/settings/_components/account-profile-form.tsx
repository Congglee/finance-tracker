import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import envConfig from "@/config/config";
import { UpdateMeBody, UpdateMeBodyType } from "@/schemas/account.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function AccountProfileForm() {
  const form = useForm<UpdateMeBodyType>({
    resolver: zodResolver(UpdateMeBody),
    defaultValues: {
      name: "CN",
      email: "m@example.com",
      is_two_factor_enabled: false,
      avatar: undefined,
    },
  });

  const avatar = form.watch("avatar");
  const name = form.watch("name");

  const avatarInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const previewAvatar = useMemo(() => {
    if (file) {
      return URL.createObjectURL(file);
    }
    return avatar;
  }, [avatar, file]);

  const reset = () => {
    form.reset();
    setFile(null);
  };

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <Form {...form}>
      <form
        noValidate
        className="grid auto-rows-max items-start gap-4 md:gap-8"
        onSubmit={onSubmit}
      >
        <Card>
          <CardHeader>
            <CardTitle className="font-medium text-xl">
              Account profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-2 items-start justify-start">
                      <Avatar className="aspect-square w-[100px] h-[100px] rounded-md object-cover">
                        <AvatarImage src={previewAvatar} />
                        <AvatarFallback className="rounded-none">
                          {name}
                        </AvatarFallback>
                      </Avatar>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={avatarInputRef}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setFile(file);
                            field.onChange(
                              `${envConfig.NEXT_PUBLIC_APP_URL}/` + field.name
                            );
                          }
                        }}
                      />
                      <Button
                        variant="outline"
                        className="flex aspect-square w-[100px] h-[100px] border-dashed rounded-md [&_svg]:size-5"
                        type="button"
                        onClick={() => avatarInputRef.current?.click()}
                      >
                        <Upload className="text-muted-foreground" />
                        <span className="sr-only">Upload</span>
                      </Button>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormControl>
                      <Input id="name" placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        {...field}
                        placeholder="john.doe@example.com"
                        type="email"
                        disabled
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="is_two_factor_enabled"
                render={({ field }) => (
                  <FormItem className="flex flex-col xs:flex-row xs:items-center justify-between rounded-lg shadow-sm border p-3 gap-3">
                    <div className="space-y-0.5">
                      <FormLabel>Two factor authentication</FormLabel>
                      <FormDescription>
                        Enable two factor authentication for your account
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        disabled={false}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
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
