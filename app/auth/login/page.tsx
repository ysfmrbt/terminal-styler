import { LoginForm } from "@/components/molecules/auth";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center gap-4 w-full mt-8">
      <LoginForm />
      <p>
        Don&apos;t have an account?{" "}
        <Link href="/auth/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
        .
      </p>
    </div>
  );
}
