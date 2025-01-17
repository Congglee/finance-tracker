"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LoginBody, LoginBodyType } from "@/schemas/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function LoginCard() {
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome back 🙌</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-4">
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
                  <div className="flex items-center">
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Link
                      href="/reset"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
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
            <Button
              disabled={false}
              size="lg"
              className="w-full bg-gradient-to-b from-violet-600 to-violet-700 text-primary-foreground hover:from-violet-700 hover:to-violet-700"
            >
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <Separator />
      <CardContent className="p-7 flex flex-col">
        <Button
          variant="secondary"
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
          Don&apos;t have an account?{" "}
          <Link href="/register">
            <span className="text-secondary">Register</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
