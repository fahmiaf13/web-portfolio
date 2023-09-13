"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setToggle } from "@/redux/features/toggleSlice";
import { Icon } from "@iconify/react";
import { useScreenSize } from "@/hooks/useDimension";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { useMouseScroll } from "@/hooks/useMouseScroll";
import Link from "next/link";
import Logo from "@/assets/img/logo.svg";
import Image from "next/image";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const toggle = useAppSelector((state) => state.toggle);
  const screenSize = useScreenSize();
  const mouseScroll = useMouseScroll();
  const router = useRouter();

  const handleToggleClick = (value: number) => {
    dispatch(setToggle(value));
  };

  return (
    <nav className={`${mouseScroll > 10 ? "bg-foreground/5 backdrop-blur-sm" : "bg-transparent"} duration-150 w-full z-[1] fixed h-24`}>
      <div className="container mx-auto flex items-center h-full justify-between md:justify-evenly">
        <Link href="/" className="flex gap-1 items-center">
          <div className="relative">
            <Image className="w-5" src={Logo} alt="icon" priority width={300} height={300} />
          </div>
          <div className="font-extrabold text-2xl">Portfolio</div>
        </Link>
        {screenSize >= 768 ? (
          <>
            <ul className="flex items-center gap-4 text-base">
              <motion.div className="w-full relative gap-3 flex bg-foreground/5 backdrop-blur-sm py-2 px-2 rounded-full" whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                <button onClick={() => handleToggleClick(0)} className="w-1/2 relative z-10 pl-2 py-1 text-lg font-bold">
                  Work
                </button>
                <span className="mx-[1px]" />
                <button onClick={() => handleToggleClick(1)} className="w-1/2 relative z-10 pr-2 py-1 text-lg font-bold">
                  Task
                </button>
                <motion.span className={`block absolute w-16 h-9 p-3 z-1 rounded-full bg-white shadow`} animate={{ x: toggle === 0 ? 0 : 64 }} transition={{ duration: 0.2 }} />
              </motion.div>
            </ul>
            <div>
              <Link target="_blank" href="https://drive.google.com/file/d/1Ji0Qymml4z7neCYJNvyBSQjb_jjVi56L/view?usp=drive_link">
                <Button className="hover:bg-transparent duration-300 hover:text-primary hover:border-primary hover:border-2 border-2 border-primary">Download CV</Button>
              </Link>
            </div>
          </>
        ) : (
          <Sheet>
            <SheetTrigger>
              <Icon icon="ci:hamburger-md" width={30} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-extrabold text-4xl">Portfolio</SheetTitle>
                <SheetClose asChild>
                  <ul className="text-2xl pt-10 text-foreground/50 font-light flex items-center flex-col gap-10">
                    <li>
                      <button onClick={() => router.push("/")}>Home</button>
                    </li>
                    <li>
                      <button onClick={() => handleToggleClick(0)}>Work</button>
                    </li>
                    <li>
                      <button onClick={() => handleToggleClick(1)}>Task</button>
                    </li>
                    <Link className="w-full" target="_blank" href="https://drive.google.com/file/d/1Ji0Qymml4z7neCYJNvyBSQjb_jjVi56L/view?usp=drive_link">
                      <Button className="w-full hover:bg-transparent  duration-300 hover:text-primary hover:border-primary hover:border-2 border-2 border-primary">Download CV</Button>
                    </Link>
                  </ul>
                </SheetClose>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
}
