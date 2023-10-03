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
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const toggle = useAppSelector((state) => state.toggle);
  const screenSize = useScreenSize();
  const mouseScroll = useMouseScroll();
  const router = useRouter();

  const handleToggleClick = (value: number) => {
    dispatch(setToggle(value));
  };

  const handleDownload = () => {
    setIsLoading(true);
    try {
      const downloadUrl = "/cv.pdf";
      const anchor = document.createElement("a");
      anchor.href = downloadUrl;
      anchor.download = "CV-Fahmi Achmad.pdf";
      anchor.click();
      anchor.remove();
    } catch (error) {
      alert("Terjadi Kesalahan");
    } finally {
      setIsLoading(false);
    }
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
              <Button disabled={isLoading ? true : false} onClick={handleDownload} className="w-full hover:bg-transparent duration-300 hover:text-primary hover:border-primary hover:border-2 border-2 border-primary">
                {isLoading ? (
                  <>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    <p>Please wait</p>
                  </>
                ) : (
                  <p>Download CV</p>
                )}
              </Button>
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
                    <Button disabled={isLoading ? true : false} onClick={handleDownload} className="w-full hover:bg-transparent  duration-300 hover:text-primary hover:border-primary hover:border-2 border-2 border-primary">
                      {!isLoading ? (
                        <>
                          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                          <p>Please wait</p>
                        </>
                      ) : (
                        <p>Download CV</p>
                      )}
                    </Button>
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
