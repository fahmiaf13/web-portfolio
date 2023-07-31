"use client";

import { useState, useCallback } from "react";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [index, setIndex] = useState<any>(false);

  const handleClose = useCallback(() => {
    setIndex(false);
  }, []);

  const styles: any = {
    gallery: `h-screen w-full gap-3 flex flex-row justify-center items-center`,
    item: `h-[50px] bg-yellow-500 w-[50px] gap-3`,
    placeholder: `bg-yellow-500 h-[50px] w-[50px]`,
    additional: {},
    modal: `bg-yellow-500 flex w-[500px] h-[500px] relative p-5`,
    modalClose: `w-[30px] h-[30px] absolute top-5 right-5`,
    modalBackdrop: `bg-slate-500 fixed h-screen w-screen top-0 left-0 z-[1]`,
    itemClose: `w-[30px] h-[30px] absolute top-0 right-0`,
    modalContainer: `h-screen w-screen top-0 left-0 fixed flex justify-center items-center z-[2]`,
  };

  return (
    <div className="min-h-screen">
      <LayoutGroup>
        <ul className={styles.gallery}>
          {[0, 1, 2, 3].map((item) => (
            <motion.li className={styles.item} key={item} layoutId={`${item}`} onClick={() => index === false && setIndex(item)} initial={{ borderRadius: "0.6rem" }}>
              <motion.div className={styles.placeholder} layoutId={`placeholder-${item}`}>
                <div>{item}</div>
              </motion.div>
              <motion.div className={styles.additional} layoutId={`additional-${item}`}>
                <div />
                <div />
                <div />
              </motion.div>
              <motion.div className={styles.itemClose} layoutId={`close-${item}`} />
            </motion.li>
          ))}
        </ul>
        <AnimatePresence>
          {index !== false && (
            <>
              <motion.div className={styles.modalContainer} key="modal">
                <motion.div className={styles.modal} layoutId={`${index}`} initial={{ borderRadius: "1.2rem" }}>
                  <motion.div className={styles.placeholder} layoutId={`placeholder-${index}`}>
                    <div>{index}</div>
                  </motion.div>
                  <motion.div className={styles.additional} layoutId={`additional-${index}`}>
                    <div />
                  </motion.div>
                  <motion.div className={styles.modalClose} layoutId={`close-${index}`} onClick={handleClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
  );
}
