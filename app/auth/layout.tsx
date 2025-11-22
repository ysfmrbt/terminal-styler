export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-200 font-sans dark:bg-neutral-900">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 sm:items-start">
        {children}
      </main>
    </div>
  );
}
