"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { experienceDatas } from "@/data/ExperienceData";
import { ProjectCardsData } from "@/data/ProjectData";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Icon } from "@iconify/react";

type styleType = {
  gallery: string;
  item: string;
  placeholder: string;
  additional: string;
  modal: string;
  modalClose: string;
  modalBackdrop: string;
  itemClose: string;
  modalContainer: string;
};

export default function Home() {
  const switchValue = useAppSelector((state) => state.switch);
  const [selectedId, setSelectedId] = useState<any>(null);
  const [cards, isCards] = useState<boolean | null>(false);

  const handleClose = useCallback(() => {
    setSelectedId(null);
  }, []);

  const handleOpenCard = (id: number | null) => {
    setSelectedId(id);
  };

  const styles: styleType = {
    gallery: `w-full gap-3 flex flex-col justify-center items-center`,
    item: `min-h-[300px]  w-full bg-gray-100 gap-3 rounded-xl`,
    placeholder: `h-[300px] w-full`,
    additional: ``,
    modal: `bg-gray-100 w-[500px] h-[500px] relative`,
    modalClose: `w-[30px] h-[30px] visible absolute top-3 right-3`,
    modalBackdrop: `bg-slate-500 fixed h-screen w-screen top-0 left-0 z-[1]`,
    itemClose: ` invisible absolute top-3 right-3`,
    modalContainer: `h-screen w-screen top-0 left-0 fixed flex justify-center items-center z-[2]`,
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
        <section className="min-h-screen w-5/12">
          <div className="my-5 font-extrabold text-center text-4xl">Experiences</div>
          <div className="h-screen">
            <LayoutGroup>
              <ul className={styles.gallery}>
                {experienceDatas.map((item) => (
                  <motion.li className={styles.item} key={item.id} layoutId={`${item.id}`} initial={{ borderRadius: "0.6rem" }}>
                    <motion.div className={styles.placeholder} layoutId={`placeholder-${item.id}`}>
                      <div className="flex flex-row h-full items-center p-5">
                        <div className="w-1/2 flex justify-center">
                          <div className="w-32 flex items-center justify-center h-full">
                            <Image src={item.icon} alt="stamp-logo" style={{ width: "100%", height: "auto" }} />
                          </div>
                        </div>
                        <div className="flex w-1/2 flex-col">
                          <div className="font-extrabold text-2xl">{item.role}</div>
                          <div className="text-xl">{item.company}</div>
                          <div>{item.entryDate}</div>
                          <div>{item.status}</div>
                          <Button onClick={() => selectedId === null && setSelectedId(item)} className="w-1/2 hover:bg-transparent duration-300 hover:text-primary hover:border-primary hover:border-2">
                            See More
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div className={styles.additional} layoutId={`additional-${item.id}`}>
                      <div />
                    </motion.div>
                    <motion.div className={styles.itemClose} layoutId={`close-${item.id}`} />
                  </motion.li>
                ))}
              </ul>
              <AnimatePresence>
                {selectedId !== null && (
                  <>
                    <motion.div className={styles.modalContainer} key="modal">
                      <motion.div className={styles.modal} layoutId={`${selectedId.id}`} initial={{ borderRadius: "1.2rem" }}>
                        <motion.div className={styles.placeholder} layoutId={`placeholder-${selectedId.id}`}>
                          <div className="flex items-center flex-col p-5">
                            <div className="w-24 flex items-center justify-center h-full">
                              <Image src={selectedId.icon} alt="stamp-logo" style={{ width: "100%", height: "auto" }} />
                            </div>
                            <div className="flex flex-col">
                              <div className="text-center text-3xl font-extrabold">{selectedId.company}</div>
                              <div className="text-lg text-center text-primary font-extrabold">{selectedId.role}</div>
                              <div className="text-normal text-center text-primary font-extralight ">{`${selectedId.status} ${selectedId.entryDate}`}</div>
                              {selectedId?.desc?.map((item: any, index: number) => (
                                <div className="text-normal font-extralight" key={index}>
                                  - {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                        <motion.div className={styles.additional} layoutId={`additional-${selectedId.id}`}>
                          <div />
                        </motion.div>
                        <motion.div
                          className={styles.modalClose}
                          layoutId={`close-${selectedId.id}`}
                          onClick={handleClose}
                          variants={{
                            hidden: {
                              opacity: 0,
                              transition: {
                                duration: 0.01,
                              },
                            },
                            visible: {
                              opacity: 1,
                              transition: {
                                // delay: 0.04,
                                duration: 0.01,
                              },
                            },
                          }}
                          initial="hidden"
                          exit="hidden"
                          animate="visible"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M15 5L5 15M5 5l5.03 5.03L15 15" fill="transparent" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className={styles.modalBackdrop}
                      key="backdrop"
                      onClick={handleClose}
                      variants={{
                        hidden: {
                          opacity: 0,
                          transition: {
                            duration: 0.16,
                          },
                        },
                        visible: {
                          opacity: 0.8,
                          transition: {
                            delay: 0.04,
                            duration: 0.2,
                          },
                        },
                      }}
                      initial="hidden"
                      exit="hidden"
                      animate="visible"
                    />
                  </>
                )}
              </AnimatePresence>
            </LayoutGroup>
          </div>
        </section>
      ) : (
        <section className="w-1/2 flex flex-col gap-10 min-h-screen justify-center items-center">
          <div className="font-extrabold text-4xl">My Work</div>
          {ProjectCardsData.map((item, i) => (
            <>
              <Card onClick={() => handleOpenCard(i)} key={i} className="w-full scale-100 hover:scale-105 duration-200 rounded-[30px] flex p-8 items-center h-96 relative overflow-hidden">
                <div className="w-1/2">
                  <Image src={item.icon} alt="stamp-logo" width={50} height={50} />
                  <div className="font-extrabold text-3xl mt-5 mb-2">{item.name}</div>
                  <div className="text-sm">{item.desc}</div>
                  <Button className="text-md font-semibold my-3 tracking-widest p-5">See More</Button>
                </div>
                <div className="w-1/2 h-1/2">
                  <Image src={item.img} alt="stamp-image" className="absolute right-24 bottom-0 object-cover" width={150} />
                  {/* <Image src={item.img} alt="stamp-image" className="absolute right-10 bottom-0 object-cover" width={250} /> */}
                </div>
              </Card>
            </>
          ))}
        </section>
      )}
    </main>
  );
}
