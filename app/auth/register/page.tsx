import { RegisterForm } from "@/components/molecules/auth";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center gap-4 w-full mt-8">
      <RegisterForm />
      <p>
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-600 hover:underline">
          Login here
        </Link>
        .
      </p>
    </div>
  );
}
