"use client";

import { About, AboutUs, ClientList, FAQs, FillUpForm, Footer, Header, Hero, ProductList, Starting, VideoTutorial } from "@/components";
import AffiliateProgramPage from "@/components/AffiliateProgramPage";
import { AnimatePresence, motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import { BsQuestionLg } from "react-icons/bs";

export default function Home() {
  const [page, setPage] = useState(0);
  const [endWarping, endWarpingNow] = useState(false);

  const SectionPage: Record<number, JSX.Element> = {
    1: <AffiliateProgramPage />,
    2: <FAQs />,
    3: <ProductList />,
    5: <AboutUs />
  }

  useEffect(() => {  
      const stopWarp = setTimeout(() => {
          endWarpingNow(true)
      }, 8000);
  
      return () => {
          clearTimeout(stopWarp);
      };
    }, []);

  return (
    <main className='min-h-[100vh] h-auto w-full flex flex-col items-center relative overflow-x-hidden p-0 m-0 select-none'>
      <Header setPage={setPage}/>
      {page === 0 ? (
        <>
          <AnimatePresence mode='wait'>{!endWarping && (<Starting/>)}</AnimatePresence>
          <Hero endWarping={endWarping}/>
          {endWarping && (
          <>
            <About />
            <VideoTutorial />
            <FillUpForm />
            <ClientList />
          </>
          )}
        </>
        ) : SectionPage[page]}
      {endWarping && (<Footer setPage={setPage}/>)}
      {page !== 2 && (
        <motion.button 
          type="button" 
          animate={{x:[20, 5, 20]}}
          transition={{
            duration: 1.5,
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className="fixed z-9999 right-0 top-3/4 flex items-center text-blue gap-2 md:text-lg font-bold bg-white p-1 md:p-1.5 pr-5 rounded-l-full shadow-md shadow-gray-700"
          onClick={() => setPage(2)}
        >
          <span 
            className="h-8 w-8 md:h-10 md:w-10 bg-dark-blue rounded-full flex items-center justify-center text-xl md:text-3xl hover:scale-105 text-white ease-out duration-200"
          ><BsQuestionLg /></span>
          FAQs
        </motion.button>
      )}
      
    </main>
  );
}
