import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/notebooks/header";

export default function NotebookPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Header />
      <main className="max-w-6xl w-full mx-auto">{children}</main>
    </div>
  );
}
