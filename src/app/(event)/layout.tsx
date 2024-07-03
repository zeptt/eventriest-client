import AuthNavbar from "@/components/navbars/auth-navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
    <section className="h-[calc(100vh-80px)] w-full">
      <AuthNavbar />
      {children}
    </section>
    </TooltipProvider>
  );
}
