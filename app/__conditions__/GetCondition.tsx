'use client'

import Bottombar from "@/components/shared/Bottombar";
import LeftSideBar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import { usePathname } from "next/navigation"

export default function GetCondition() {
  const pathname = usePathname();
  console.log('pathname', pathname);
  const condition = pathname === '/sign-in' || pathname === '/sign-up';

  return condition;
}