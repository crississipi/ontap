"use client";

import { About, AboutUs, ClientList, FillUpForm, Footer, Header, Hero, InquireItem, ProductList, VideoTutorial } from "@/components";
import AffiliateProgramPage from "@/components/AffiliateProgramPage";
import { JSX, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);

  const SectionPage: Record<number, JSX.Element> = {
    1: <AffiliateProgramPage />,
    3: <ProductList/>,
    5: <AboutUs />
  }

  return (
    <main className="min-h-[100vh] h-auto w-full flex flex-col items-center relative md:overflow-x-hidden">
      <Header setPage={setPage}/>
      {page === 0 ? (
        <>
          <Hero />
          <About />
          <VideoTutorial />
          <FillUpForm />
          <ClientList />
        </>
      ) : SectionPage[page]}
      <Footer setPage={setPage}/>
    </main>
  );
}
