"use client"

import React, { forwardRef, useEffect, useState } from 'react'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import { ObserverProps } from '@/types';

const cardUrls = [
    "/images/card-1.png",
    "/images/card-2.png",
    "/images/card-3.png",
    "/images/card-4.png",
];

const heroDetails = [
    {
        name: 'Interactive Design',
        text: 'Impress your contacts with a modern and interactive layout.'
    },
    {
        name: 'Contactless Sharing',
        text: 'Simply tap and share your details effortlessly.'
    },
    {
        name: 'Custom Branding',
        text: 'Tailor the card to reflect your unique brand identity.'
    },
    {
        name: 'Multi-platform Compatibility',
        text: 'Access your digital card on various devices for seamless networking.'
    },

    {
        name: 'Online Presence',
        text: 'Enhancing digital visibility across diverse online platforms.'
    },
    {
        name: 'Real-time Update',
        text: 'Keep your contacts informed with instant update.'
    },
]

const Hero = forwardRef<HTMLDivElement, ObserverProps>(({ isInView }, ref) => {
  const [card, nextCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        nextCard(prev => (prev + 1) % cardUrls.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className='h-auto min-h-[145vh] md:min-h-auto w-full flex flex-col relative select-none text-white pt-10 items-center'>
        <Image
            priority
            height={2048}
            width={2048}
            alt='ontap creatives logo'
            src='/images/ontap-hero-bg.png'
            className='h-full w-full object-cover pt-5 absolute top-1/2 left-1/2 -translate-1/2'
        />
        <div className='z-40 flex flex-col items-center pt-10 pb-10'>
            <Image
                priority
                height={500}
                width={500}
                alt='ontap creatives logo'
                src='/images/ontap-logo-1.png'
                className='h-auto w-32 md:w-50 object-cover pt-5'
            />
            <h1 className='text-4xl md:text-7xl mt-5 md:mt-5 text-blue'>Smart Business Card</h1>
            <h2 className='text-base text-center px-3 mt-5 md:text-2xl md:w-2/3'>Turn every interaction into an opportunity for growth. Embrace the future of networking with our Digital Business Card - your key to a world of endless possibilities</h2>
            <div className='hidden h-auto w-full md:grid md:grid-cols-2 lg:grid-cols-4 overflow-hidden md:my-18 relative'>
                { cardUrls.map((val, i) => (
                    <motion.div
                        key={i}
                        className='flex items-start justify-center'
                        initial={{x: 9999}}
                        animate={{x: 0}}
                        transition={{
                            duration: 1.5,
                            ease: 'easeOut',
                            delay: i * 0.3
                        }}
                    >
                        <Image
                            height={500}
                            width={500}
                            alt='ontap creatives cards'
                            src={val}
                            className='h-auto w-42 md:w-64 object-contain pt-5 object-center'
                        />
                    </motion.div>
                ))}
            </div>
            <div className='md:hidden flex items-center justify-center w-full overflow-hidden'>
                <AnimatePresence mode='wait'>
                    {cardUrls.map((val, i) => (
                        i === card && (
                            <motion.div
                                key={i}
                                className='flex items-start justify-center'
                                initial={{ x: 999 }}
                                animate={{ x: 0 }}
                                exit={{ x: -999 }}
                                transition={{
                                    duration: 0.5,
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 20
                                }}
                            >
                                <Image
                                    height={500}
                                    width={500}
                                    alt='ontap creatives cards'
                                    src={val}
                                    className='h-auto w-72 object-contain pt-5 object-center'
                                />
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>
            <div className='md:hidden flex w-full items-center justify-center gap-1 mt-10'>
                {Array.from({ length: 4 }).map((_, i) => (
                    <span key={i} className={`${i === card ? 'scale-150 mx-1 bg-white' : 'scale-100 bg-white/50'} h-2 w-2 rounded-full ease-in-out duration-200`}></span>
                ))}
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 px-5 pt-10'>
                {heroDetails.map((details, i) => (
                    <motion.span 
                        key={i} 
                        className='flex flex-col gap-1 px-3 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm'
                        initial={{filter: 'blur(10px)', scale: 0.7}}
                        animate={{filter: isInView ? 'blur(0px)' : 'blur(10px)',scale: isInView ? 1 : 0.7}}
                            transition={{
                            duration: 0.7,
                            ease: 'easeOut',
                            delay: i/4
                        }}
                    >
                            <h3 className='text-blue text-lg'>{details.name}</h3>
                            <p className='leading-5 text-base'>{details.text}</p>
                        </motion.span>
                    ))}
                </div>
        </div>
        <button 
            type="button"
            className='mt-auto py-3 px-12 mb-0.5 w-min rounded-t-md bg-light-blue z-20 text-black font-semibold text-lg tracking-wider hover:bg-blue focus:bg-blue hover:text-white focus:text-white ease-out duration-200'
        >LOGIN</button>
    </div>
  );
});

export default Hero;