"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

function useInView(threshold = 1) {
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

const OnTapAnimation = () => {
  const { ref: section1Ref, isInView: section1Visible } = useInView();

  return (
    <div ref={section1Ref} className='h-full w-full flex relative perspective-distant items-center'>
        <div className={`w-60 absolute ${section1Visible ? 'right-1/2' : 'right-1/10'} top-1/2 -translate-y-1/2 rounded-lg -rotate-z-90 overflow-hidden rotate-y-55 ease-out duration-500`}>
            <Image
                height={500}
                width={500}
                alt='ontap creatives cards'
                src='/images/card-cover.png'
                className='w-full object-contain object-center'
            />
        </div>
        <div className={`h-full ${section1Visible ? 'min-w-42 max-w-42' : 'min-w-0 max-w-0 overflow-hidden'} flex items-center relative ml-7 perspective-distant transform-3d ease-out duration-500`}>
            <span className='h-4 w-4 rounded-full border-2 border-blue absolute pulseGrow'></span>
            <span className='h-12 w-12 rounded-full border-2 border-blue absolute left-1 pulseGrow' style={{ animationDelay: "0.1s" }}></span>
            <span className='h-20 w-20 rounded-full border-2 border-blue absolute left-2 pulseGrow' style={{ animationDelay: "0.15s" }}></span>
            <span className='h-28 w-28 rounded-full border-2 border-blue absolute left-3 pulseGrow' style={{ animationDelay: "0.2s" }}></span>
            <span className='h-36 w-36 rounded-full border-2 border-blue absolute left-4 pulseGrow' style={{ animationDelay: "0.25s" }}></span>
            <span className='h-42 w-42 rounded-full border-2 border-blue absolute left-5 pulseGrow' style={{ animationDelay: "0.3s" }}></span>
            <span className='h-50 w-50 rounded-full border-2 border-blue absolute left-6 pulseGrow' style={{ animationDelay: "0.35s" }}></span>
            <span className='h-58 w-58 rounded-full border-2 border-blue absolute left-7 pulseGrow' style={{ animationDelay: "0.4s" }}></span>
            <span className='h-64 w-64 rounded-full border-2 border-blue absolute left-8 pulseGrow' style={{ animationDelay: "0.45s" }}></span>
            <span className='h-72 w-72 rounded-full border-2 border-blue absolute left-9 pulseGrow' style={{ animationDelay: "0.5s" }}></span>
            <span className='h-80 w-80 rounded-full border-2 border-blue absolute left-10 pulseGrow' style={{ animationDelay: "0.55s" }}></span>
            <span className='h-88 w-88 rounded-full border-2 border-blue absolute left-11 pulseGrow' style={{ animationDelay: "0.6s" }}></span>
        </div>
        <span className={`h-full w-3/4 rotate-y-45 border-2 border-blue absolute ${section1Visible ? 'left-9/10 scale-120 z-60' : 'left-1/2 -translate-x-1/2 scale-50 z-30'} rounded-4xl ease-out duration-500 delay-100`}></span>
        <span className={`h-full w-3/4 rotate-y-45 border-2 border-blue absolute  ${section1Visible ? 'left-5/7 scale-110 z-60' : 'left-1/2 -translate-x-1/2 scale-50 z-30'} rounded-4xl ease-out duration-500 delay-150`}></span>
        <span className={`h-full w-3/4 rotate-y-45 border-2 border-blue absolute  z-40 ${section1Visible ? 'left-1/3 scale-90' : 'left-1/2 -translate-x-1/2 scale-50'} rounded-4xl ease-out duration-500 delay-200`}></span>
        <span className={`h-full w-3/4 rotate-y-45 border-2 border-blue absolute z-40 ${section1Visible ? 'left-1/6 scale-80' : 'left-1/2 -translate-x-1/2 scale-50'} rounded-4xl ease-out duration-500 delay-250`}></span>
        <span className={`h-full w-3/4 rotate-y-45 border-2 border-blue absolute z-40 ${section1Visible ? 'left-0 scale-70' : 'left-1/2 -translate-x-1/2 scale-50'} rounded-4xl ease-out duration-500 delay-300`}></span>
        <span className={`h-full w-3/4 rotate-y-45 border-2 border-blue absolute z-40 ${section1Visible ? '-left-1/7 scale-60' : 'left-1/2 -translate-x-1/2 scale-50'} rounded-4xl ease-out duration-500 delay-350`}></span>
        <Image
            height={500}
            width={500}
            alt='ontap creatives cards'
            src='/images/ontapphone.png'
            className='w-40 object-cover pt-5 object-center rounded-lg -mt-5 z-50'
        />
    </div>
  )
}

export default OnTapAnimation