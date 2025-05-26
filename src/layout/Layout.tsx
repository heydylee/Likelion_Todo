import { HTMLAttributes } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-100 text-gray-900">
      <Sidebar />

      <div className="flex flex-grow flex-col gap-8 p-16">{children}</div>
    </div>
  );
};

export default Layout;
