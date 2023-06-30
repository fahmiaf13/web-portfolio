"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSwitch } from "@/redux/features/switchSlice";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const switchValue = useAppSelector((state) => state.switch);

  const handleSwitch = () => {
    dispatch(setSwitch(!switchValue));
  };

  return (
    <nav className="w-full z-[100] fixed h-24 flex items-center justify-evenly">
      <Link href="/">
        <div className="font-extrabold text-2xl">Portfolio</div>
      </Link>
      <ul className="flex items-center gap-4 text-base">
        <motion.button onClick={handleSwitch} className="w-full relative gap-3 flex bg-foreground/5 backdrop-blur-sm py-2 px-2 rounded-full" whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
          <span className="w-1/2 relative z-10 pl-2 py-1 text-lg font-bold">Work</span>
          <span className="mx-[1px]" />
          <span className="w-1/2 relative z-10 pr-2 py-1 text-lg font-bold">Task</span>
          <motion.span className={`block absolute w-16 h-9 p-3 z-1 rounded-full bg-white shadow`} animate={{ x: switchValue ? 64 : 0 }} transition={{ duration: 0.2 }} />
        </motion.button>
      </ul>
      <div>
        <Link target="_blank" href="https://drive.google.com/file/d/1Ji0Qymml4z7neCYJNvyBSQjb_jjVi56L/view?usp=drive_link">
          <Button>Download CV</Button>
        </Link>
      </div>
    </nav>
  );
}
