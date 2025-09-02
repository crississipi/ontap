"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';


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

const AffiliateProgramPage = () => {
  
  const { ref: section1Ref, isInView: section1Visible } = useInView();
  const { ref: section2Ref, isInView: section2Visible } = useInView();

  return (
    <div className='h-auto w-full flex flex-col'>
        <div ref={section1Ref} className='h-full md:h-[100vh] w-full relative flex items-center pl-5 py-10 md:py-0'>
            <Image
                height={4096}
                width={4096}
                alt='affiliate page background'
                src='/images/affiliate-bg.png'
                className='h-full w-full object-cover object-center absolute top-1/2 left-1/2 -translate-1/2'
            />
            <motion.span 
                className='z-20 text-white flex flex-col w-2/3 md:w-1/2 gap-5 mt-16'
                initial={{ x: '-150%' }}
                animate={section1Visible ? { x: '0%' } : {}}
                transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.3
                }}
            >
                <h1 className='text-4xl md:text-7xl md:pl-20 font-bold uppercase'>Affiliate Program</h1>
                <p className='text-lg leading-6 md:pl-20 md:text-2xl md:leading-normal'>We are excited to present our Affiliate Program for cutting-edge Smart Business Card. This program is designed to create a mutually beneficial partnership, allowing reseller to Tap into a growing market and offer innovative smart business card service to their clients.</p>
            </motion.span>
        </div>
        <div ref={section2Ref} className='h-max w-full flex flex-col items-center py-10 z-10 md:py-20'>
            <motion.h2 
                className='text-3xl font-bold text-dark-blue pb-10 w-full text-center md:text-4xl'
                initial={{y: '150%'}}
                animate={{y: section2Visible ? '0%' : '150%'}}
                transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.3
                }}
            >How to Apply for OnTap's <span className='text-blue'>Affiliate Program?</span></motion.h2>
            <span className='-z-10 py-10 border-t-2 border-dark-blue w-9/10 text-center text-dark-blue flex flex-col'>
                <h3 className='mb-10 font-bold md:text-xl' >To know more of our Affiliate Program, please get in touch with us for further information.</h3>
                <h4 className='text-black text-2xl font-bold mb-5 md:text-3xl'>SALES TEAM</h4>
                <p className='font-bold text-xl md:text-2xl'>+63 9177008364</p>
                <p className='font-bold text-xl md:text-2xl'>+63 9764183188</p>
                <p className='font-bold text-xl mb-10 md:text-2xl'>+63 9764183189</p>
                <p className='text-blue mb-5 md:text-xl'>Click/Download the application form here.</p>
                <h5 className='mb-3 font-bold md:text-lg'>Kindly send your application to our email</h5>
                <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='font-bold md:text-lg'
                >ontapcreatives@gmail.com</a>
            </span>
        </div>
        <div className='h-max md:h-[100vh] w-full flex flex-col relative px-10 py-5 md:overflow-hidden'>
            <Image
                height={4096}
                width={4096}
                alt='affiliate page background'
                src='/images/join-team-bg.png'
                className='h-full md:h-auto w-full object-cover md:object-contain object-center absolute top-1/2 left-1/2 -translate-1/2'
            />
            <h2 className='z-10 w-full text-3xl font-bold text-dark-blue text-center md:text-7xl md:mt-10'>JOIN OUR TEAM</h2>
            <h3 className='z-10 md:my-auto text-2xl ml-32 md:mx-auto my-14 font-bold text-dark-blue md:leading-18 md:text-6xl md:w-1/3'>BECOME AN AFFILIATE MEMBER TODAY</h3>
        </div>
    </div>
  );
};

export default AffiliateProgramPage