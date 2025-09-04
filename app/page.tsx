"use client";

import { About, AboutUs, ClientList, FAQs, FillUpForm, Footer, Header, Hero, ProductList, Starting, VideoTutorial } from "@/components";
import AffiliateProgramPage from "@/components/AffiliateProgramPage";
import { AnimatePresence } from "framer-motion";
import { JSX, useEffect, useState } from "react";

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
    </main>
  );
}
