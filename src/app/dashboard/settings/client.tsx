"use client";

import AccountProfileForm from "@/app/dashboard/settings/_components/account-profile-form";
import ChangePasswordForm from "@/app/dashboard/settings/_components/change-password-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsClient() {
  return (
    <Tabs defaultValue="account">
      <TabsList className="w-full h-full flex-col sm:grid sm:grid-cols-3">
        <TabsTrigger value="account" className="w-full">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" disabled={false} className="w-full">
          Change Password
        </TabsTrigger>
        <TabsTrigger value="settings" className="w-full">
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-5">
        <AccountProfileForm />
      </TabsContent>
      <TabsContent value="password" className="mt-5">
        <ChangePasswordForm />
      </TabsContent>
      <TabsContent value="settings" className="mt-5">
        Your currency settings
      </TabsContent>
    </Tabs>
  );
}
