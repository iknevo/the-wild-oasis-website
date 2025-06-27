import SideNavigation from "@/app/_components/SideNavigation";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-12 h-full">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
