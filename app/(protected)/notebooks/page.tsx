import { NotebooksTable } from "@/components/notebooks/notebooks-table";

export default function DashboardPage() {
  return (
    <div className="font-outfit max-w-6xl w-full mx-auto mt-10">
      <div className="flex items-center gap-2 mb-4">
        <p className="text-lg font-semibold">Your Notebooks</p>
      </div>
      <NotebooksTable />
    </div>
  );
}
