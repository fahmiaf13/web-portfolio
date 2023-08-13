"use client";

import { iconFooter } from "@/data/IconsData";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="mt-10 pt-10 bg-foreground text-background">
      <div className="container flex justify-center">
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold mb-3">Contact Me</div>
          <div className="flex gap-8">
            {iconFooter.social.map((item, index) => (
              <Link className="hover:opacity-30 duration-200" target="_blank" key={index} href={item.link}>
                <Icon icon={item.icon} width={36} />
              </Link>
            ))}
          </div>
          <div className="text-xl font-bold mt-5 mb-3">Built with</div>
          <div className="flex gap-5">
            {iconFooter.support.map((item, index) => (
              <Link className="hover:opacity-30 duration-200" target="_blank" key={index} href={item.link}>
                <Icon icon={item.icon} width={36} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="font-extralight text-center w-full bg-black/30 mt-8 py-2 text-sm">Copyright © 2023 Fahmi Achmad Fahrudin. All rights reserved.</div>
    </footer>
  );
}
