import AuthSwitch from "@/app/(auth)/auth-switch";
import Logo from "@/components/logo";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="container min-h-screen py-6">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <AuthSwitch />
      </nav>
      <div className="flex flex-col items-center justify-center pt-4">
        {children}
      </div>
    </main>
  );
}
