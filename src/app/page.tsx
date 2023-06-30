"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { experienceDatas } from "@/data/ExperienceData";
import { ProjectCardsData } from "@/data/ProjectData";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Home() {
  const switchValue = useAppSelector((state) => state.switch);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleOpenCard = (id: number | null) => {
    setSelectedId(id);
  };

  useEffect(() => {
    if (selectedId !== null) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedId]);

  const variants = {
    visible: {
      scale: 1.25,
      zIndex: 100,
      transition: { type: "spring", bounce: 0, duration: 0.7 },
    },
    hidden: { scale: 1, opacity: 1 },
  };

  return (
    <main className="flex flex-col items-center">
      <section className="w-full flex h-screen justify-center items-center gap-10">
        <div>
          <h1 className="text-7xl font-extrabold">Hello,</h1>
          <h2 className="text-3xl font-extrabold">{`I'm Fahmi Achmad Fahrudin`}</h2>
          <p className="font-thin">Full-Time Programmer | Part-Time Designer</p>
        </div>
        <div>
          <Image className="border-2 rounded-xl" src="/hero.png" alt="hero" priority width={300} height={300} />
        </div>
      </section>
      {!switchValue ? (
        <section className="w-1/2 flex flex-col min-h-screen justify-center gap-10 items-center">
          <div className="my-5 font-extrabold text-4xl">Experiences</div>
          {experienceDatas.map((item, index) => (
            <div key={index}>
              {/* <motion.div style={{selectedI}} key={index} variants={variants} animate={selectedId === index ? "visible" : "hidden"}> */}
              <motion.div className={selectedId === index ? "relative" : ""} key={index} variants={variants} animate={selectedId === index ? "visible" : "hidden"}>
                <Card className={`w-full scale-100 ${selectedId === null ? "hover:scale-105" : ""} p-5 duration-200 gap-5 rounded-[30px] flex items-center min-h-[300px] relative overflow-hidden`}>
                  <div className="w-1/2 flex justify-center">
                    <div className="w-40">
                      <Image src={item.icon} alt="stamp-logo" style={{ width: "100%", height: "auto" }} />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="font-extrabold text-3xl mt-5 mb-2">{item.company}</div>
                    <div className="font-bold">{item.role}</div>
                    <div className="text-sm">Stakeholder Management System of Pertamina is an application for managing data of institutions and stakeholders that have an impact on Pertamina policy.</div>
                    {selectedId === index ? (
                      <>
                        <ul className="text-xs mt-3 list-disc">
                          {item.desc.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                          <Icon onClick={() => handleOpenCard(null)} className="absolute right-5 top-5 cursor-pointer" icon="zondicons:close-solid" />
                        </ul>
                      </>
                    ) : (
                      <Button onClick={() => handleOpenCard(index)} className="my-5 hover:underline underline-offset-4">
                        See Details
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            </div>
          ))}
          {selectedId !== null && <div className="h-screen w-screen fixed top-0 left-0 backdrop-blur-sm z-[99] bg-white/30" />}
        </section>
      ) : (
        <section className="w-1/2 flex flex-col gap-10 min-h-screen justify-center items-center">
          <div className="font-extrabold text-4xl">My Work</div>
          {ProjectCardsData.map((item, index) => (
            <>
              <Card onClick={() => handleOpenCard(index)} key={index} className="w-full scale-100 hover:scale-105 duration-200 rounded-[30px] flex p-8 items-center h-96 relative overflow-hidden">
                <div className="w-1/2">
                  <Image src={item.icon} alt="stamp-logo" width={50} height={50} />
                  <div className="font-extrabold text-3xl mt-5 mb-2">{item.name}</div>
                  <div className="text-sm">{item.desc}</div>
                  <Button className="text-md font-semibold my-3 tracking-widest p-5">See More</Button>
                </div>
                <div className="w-1/2">
                  <Image src={item.img} alt="stamp-image" className="absolute right-0 bottom-0 object-cover" width={300} />
                </div>
              </Card>
            </>
          ))}
        </section>
      )}
    </main>
  );
}
