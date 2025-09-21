import Image from "next/image";
import Link from "next/link";
import Menu from "@/app/components/Menu";
import Navbar from "@/app/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      {/* Left */}
      <div className="w-[15%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 ">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo-png" width={32} height={32} />
          <span className="hidden lg:block">School Management</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[85%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
