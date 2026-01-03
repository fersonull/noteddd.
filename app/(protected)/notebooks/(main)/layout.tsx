import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/notebooks/navbar";

export default async function MainNotebooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex-1 flex flex-col">
      <Navbar />

      <main className="flex-1">{children}</main>
    </div>
  );
}
