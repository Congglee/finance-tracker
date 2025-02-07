"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Separator } from "@/components/ui/separator";
import { RegisterBody, RegisterBodyType } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

export default function RegisterCard() {
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none bg-muted dark:bg-card">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up 🏦</CardTitle>
        <CardDescription>
          By signing up, you agree to our{" "}
          <Link href="/privacy">
            <span className="text-primary font-medium hover:underline">
              Privacy Policy
            </span>
          </Link>{" "}
          and{" "}
          <Link href="/terms">
            <span className="text-primary font-medium hover:underline">
              Terms of Service
            </span>
          </Link>
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-7">
        <Form {...form}>
          <form className="space-y-4" onSubmit={onSubmit}>
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
                      type="text"
                      placeholder="Enter your name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="password"
                      type="password"
                      placeholder="Enter password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="confirm_password">
                    Confirm password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="confirm_password"
                      type="password"
                      placeholder="Enter password again"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={false}
              size="lg"
              className="w-full bg-gradient-to-b from-violet-600 to-violet-700 text-primary-foreground hover:from-violet-700 hover:to-violet-700"
            >
              Register
            </Button>
          </form>
        </Form>
      </CardContent>
      <Separator />
      <CardContent className="p-7 flex flex-col">
        <Button
          variant="outline"
          size="lg"
          className="w-full"
          disabled={false}
          onClick={() => {}}
        >
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
      </CardContent>
      <Separator />
      <CardContent className="p-4 flex items-center justify-center">
        <p className="text-sm font-medium text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-[#b973f4]">Login</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
