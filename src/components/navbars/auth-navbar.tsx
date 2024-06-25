import Image from "next/image";
import React from "react";
import { ModeToggle } from "../theme-toggle";

const AuthNavbar = () => {
  return (
    <div className="w-full flex items-center justify-between p-6 h-20">
      <Image
        src="/logo.svg"
        alt="Eventriest"
        className="text-xl"
        width={40}
        height={40}
      />
      <ModeToggle />
    </div>
  );
};

export default AuthNavbar;
