import React from "react";

export default function NotebooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh w-full font-outfit">
      <main className="flex-1">{children}</main>
    </div>
  );
}
