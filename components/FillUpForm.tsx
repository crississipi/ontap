"use client"

import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import { motion } from 'framer-motion';

const InputData = [
    {
        name: 'fname',
        label: 'First Name',
        placeholder: 'Your First Name',
        type: 'text'
    },
    {
        name: 'lname',
        label: 'Last Name',
        placeholder: 'Your Last Name',
        type: 'text'
    },
    {
        name: 'emailAdd',
        label: 'Email Address',
        placeholder: 'Your Email Address',
        type: 'email'
    },
    {
        name: 'mobNum',
        label: 'Mobile Number',
        placeholder: 'Enter your Contact Number',
        type: 'text'
    },
    {
        name: 'compName',
        label: 'Company Name',
        placeholder: 'Your Company Name',
        type: 'text'
    },
]

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
const FillUpForm = () => {
  const { ref: fillUpRef, isInView: fillUpVisible } = useInView();

  return (
    <div ref={fillUpRef} className='w-full flex flex-col py-20 items-center gap-5'>
        <h2 className='w-full text-center text-3xl font-bold'>To Arrange a Demonstration <span className='text-dark-blue'>or to Place Bulk Orders</span></h2>
        <p className='text-lg font-bold'>Kindly fill up this form</p>
        <motion.form 
            className='w-9/10 md:w-1/3 p-5 bg-neutral-100 rounded-md gap-5 flex flex-col'
            initial={{ y: '100%'}}
            animate={{ y: fillUpVisible ? '0%' : '100%'}}
            transition={{
                duration: 1,
                ease: 'easeOut',
                delay: 0.3
            }}
        >
            {InputData.map((val, i) => (
                <Input
                    key={i}
                    name={val.name}
                    type={val.type}
                    placeholder={val.placeholder}
                    label={val.label}
                >
                </Input>
            ))}
            <span className='flex flex-col'>
                <label htmlFor='messageBox'>Message <span className='text-rose-500'>*</span></label>
                <textarea name='messageBox' defaultValue='Input your message here...' className='resize-none min-h-52 rounded-sm bg-neutral-200 p-3 px-5'></textarea>
            </span>
        </motion.form>   
    </div>
  );
};

export default FillUpForm