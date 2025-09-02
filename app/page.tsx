"use client";

import { About, AboutUs, ClientList, FAQs, FillUpForm, Footer, Header, Hero, ProductList, VideoTutorial } from "@/components";
import AffiliateProgramPage from "@/components/AffiliateProgramPage";
import { JSX, useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isInView };
}

export default function Home() {
  const [page, setPage] = useState(0);
  
  const { ref: heroRef, isInView: heroVisible } = useInView();
  const { ref: videoTutorialRef, isInView: videoTutorialVisible } = useInView();
  const { ref: fillUpRef, isInView: fillUpVisible } = useInView();

  const SectionPage: Record<number, JSX.Element> = {
    1: <AffiliateProgramPage />,
    2: <FAQs />,
    3: <ProductList />,
    5: <AboutUs />
  }

  return (
    <main className="min-h-[100vh] h-auto w-full flex flex-col items-center relative overflow-x-hidden p-0 m-0">
      <Header setPage={setPage}/>
      {page === 0 ? (
        <>
          <Hero ref={heroRef} isInView={heroVisible}/>
          <About />
          <VideoTutorial ref={videoTutorialRef} isInView={videoTutorialVisible}/>
          <FillUpForm ref={fillUpRef} isInView={fillUpVisible}/>
          <ClientList />
        </>
      ) : SectionPage[page]}
      <Footer setPage={setPage}/>
    </main>
  );
}
