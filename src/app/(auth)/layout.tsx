import AuthNavbar from "@/components/navbars/auth-navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-[calc(100vh-80px)] w-full">
      <AuthNavbar />
      {children}
    </section>
  );
}
