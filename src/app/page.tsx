"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { experienceDatas } from "@/data/ExperienceData";
import { ProjectCardsData } from "@/data/ProjectData";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

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
  const toggleValue = useAppSelector((state) => state.toggle);
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
    item: `min-h-[300px] flex items-center w-full bg-gray-100 gap-3 rounded-xl`,
    placeholder: `h-full w-full`,
    additional: ``,
    modal: `bg-gray-100 w-[350px] min-h-[300px] md:w-[500px] md:h-[500px] relative p-5`,
    modalClose: `w-[20px] h-[20px] visible absolute top-5 right-5 cursor-pointer`,
    modalBackdrop: `bg-slate-500 fixed h-screen w-screen top-0 left-0 z-[1] overflow-hidden	`,
    itemClose: ` invisible absolute top-3 right-3`,
    modalContainer: `h-screen w-screen top-0 left-0 fixed flex justify-center items-center z-[2]`,
  };

  return (
    <main className="min-h-screen flex flex-col items-center">
      <section className="container mx-auto w-full flex md:flex-row flex-col h-screen justify-center items-center gap-10">
        <div className="mt-10 md:mt-0">
          <h1 className="text-7xl font-extrabold">Hello,</h1>
          <h2 className="text-3xl font-extrabold">{`I'm Fahmi Achmad Fahrudin`}</h2>
          <p className="font-thin">Full-Time Programmer | Part-Time Designer</p>
        </div>
        <div>
          <Image className="border-2 rounded-xl" src="/hero.png" alt="hero" priority width={300} height={300} />
        </div>
      </section>
      <section className="container mx-auto w-full flex flex-col h-screen justify-center items-center gap-10">
        <div className="text-5xl md:text-7xl font-extrabold text-center">About Me</div>
        <div className="w-full md:w-1/2">
          <div className="text-lg font-light text-center">
            Front-End Web Developer with over 1 year of experience specializing in React.js and Vue.js. Proficient in building dynamic and responsive user interfaces, optimizing web performance, and ensuring cross-browser compatibility.
            Experienced in server-side rendering using Node.js and Express.js with Next.js or Nuxt.js frameworks. Strong problem-solving abilities and a collaborative mindset. Passionate about creating engaging and user-friendly web
            experiences.
          </div>
        </div>
      </section>

      {toggleValue === 0 ? (
        <section className="container mx-auto md:w-7/12 lg:w-5/12">
          <div className="my-5 font-extrabold text-center text-4xl">Experiences</div>
          <div className="min-h-screen">
            <LayoutGroup>
              <ul className={styles.gallery}>
                {experienceDatas.map((item) => (
                  <motion.li className={styles.item} key={item.id} layoutId={`${item.id}`} initial={{ borderRadius: "0.6rem" }}>
                    <motion.div className={styles.placeholder} layoutId={`placeholder-${item.id}`}>
                      <div className="flex flex-col md:flex-row h-full justify-center items-center p-5">
                        <div className="w-1/2 flex items-center h-full justify-center">
                          <div className="w-28 flex items-center justify-center h-full">
                            <Image src={item.icon} alt="stamp-logo" style={{ width: "100%", height: "auto" }} />
                          </div>
                        </div>
                        <div className="flex text-center md:text-start justify-center h-full w-full md:w-1/2 flex-col">
                          <div className="font-extrabold text-xl md:text-2xl">{item.role}</div>
                          <div className="text-md font-light md:text-lg">{item.company}</div>
                          <div className="text-sm font-light">{item.entryDate}</div>
                          {/* <div className="text-sm">{item.status}</div> */}
                          <Button onClick={() => selectedId === null && setSelectedId(item)} className="w-full md:w-1/2 hover:bg-transparent mt-5 duration-300 hover:text-primary hover:border-primary hover:border-2">
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
                          <div className="flex flex-col p-5">
                            <div className="flex justify-start items-center gap-5">
                              <div className="w-16 flex items-center justify-center h-full">
                                <Image src={selectedId.icon} alt="stamp-logo" style={{ width: "100%", height: "auto" }} />
                              </div>
                              <div>
                                <div className="text-lg font-bold">{selectedId.company}</div>
                                <div className="text-sm text-primary font-light">{selectedId.role}</div>
                                <div className="text-xs text-primary font-light">{selectedId.entryDate}</div>
                              </div>
                            </div>
                            <div className="flex flex-col mt-10">
                              <div className="text-lg font-bold mb-3">Jobdesc</div>
                              {selectedId?.desc?.map((item: any, index: number) => (
                                <div className="text-sm md:text-md font-extralight" key={index}>
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
        <section className="container mx-auto md:w-10/12 lg:w-5/12">
          <div className="my-5 font-extrabold text-center text-4xl">Work</div>
          <div className="min-h-screen">
            <LayoutGroup>
              <ul className={styles.gallery}>
                {ProjectCardsData.map((item) => (
                  <motion.li className={styles.item} key={item.id} layoutId={`${item.id}`} initial={{ borderRadius: "0.6rem" }}>
                    <motion.div className={styles.placeholder} layoutId={`placeholder-${item.id}`}>
                      <div className="flex gap-5 flex-col md:flex-row h-full justify-center items-center p-5">
                        <div className="w-full md:w-1/2 flex flex-col gap-3 h-full md:items-start items-center justify-center">
                          <div className="w-10 flex items-center justify-center h-full">
                            <Image src={item.icon} alt="stamp-logo" className="w-full h-auto" />
                          </div>
                          <div className="flex text-center md:text-start items-center md:items-start justify-center h-full w-full md:w-full flex-col">
                            <div className="font-extrabold text-xl md:text-2xl">{item.name}</div>
                            <div className="text-sm">{item.desc}</div>
                          </div>
                          {/* <Button onClick={() => selectedId === null && setSelectedId(item)} className="w-1/2 hover:bg-transparent  duration-300 hover:text-primary hover:border-primary hover:border-2">
                            See More
                          </Button> */}
                        </div>
                        <div className="flex w-1/2 justify-center items-center h-full relative">
                          <Image src={item.img} alt={item.name} className="w-auto max-h-[15rem]" />
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
                              <div className="text-center text-3xl font-extrabold">{selectedId.name}</div>
                              <div className="text-lg text-center  text-primary font-extrabold">{selectedId.desc}</div>
                              {/* <div className="text-normal text-center text-primary font-extralight ">{`${selectedId.status} ${selectedId.entryDate}`}</div> */}
                              {/* {selectedId?.desc?.map((item: any, index: number) => (
                                <div className="text-normal font-extralight" key={index}>
                                  - {item}
                                </div>
                              ))} */}
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
      )}
    </main>
  );
}
