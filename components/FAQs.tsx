import React, { useState } from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi2'

const QA = [
    {
        topic: 'General Information',
        question: {
            q1: 'What is a smart business card?',
            q2: 'How does the NFC feature work on the card?',
            q3: 'Do I need a special app to use the card?',
            q4: 'Can I customize the design of my smart business card?',
            q5: 'Is there a limit to how many times the card can be tapped?'
        }
    },
    {
        topic: 'Compatibility and Usage',
        question: {
            q1: 'Which phones are compatible with the NFC business card?',
            q2: 'Will the card work on both Android and iOS devices?',
            q3: 'What happens if the phone does not support NFC?',
            q4: 'Can I use the card without an internet connection?',
            q5: 'Does the card work with all browsers when the link opens?'
        }
    },
    {
        topic: 'Setup and Customization',
        question: {
            q1: 'How do I program or set up the link on my smart business card?',
            q2: 'Can I update the website link after the card has been printed?',
            q3: 'Can I link the card to my social media profiles instead of a website?',
            q4: 'How long does it take to activate my card?',
            q5: 'Can I manage multiple links for different occasions?'
        }
    },
    {
        topic: 'Security and Privacy',
        question: {
            q1: 'Is my personal data stored on the smart business card?',
            q2: 'Can someone copy the NFC data from my card?',
            q3: 'How secure is the link sharing process?',
            q4: 'Can I disable my card if it gets lost?',
            q5: 'Does tapping the card expose my phone to viruses or malware?'
        }
    },
    {
        topic: 'Orders, Pricing, and Support',
        question: {
            q1: 'How much does a smart business card cost?',
            q2: 'Are there discounts for bulk or corporate orders?',
            q3: 'How long does it take to receive my card after ordering?',
            q4: 'What should I do if my card is damaged or not working?',
            q5: 'Do you offer customer support for setup and troubleshooting?'
        }
    },
]

const FAQs = () => {
  const [showQA, setShowQA] = useState(false);
  return (
    <div className='h-[100vh] w-full bg-green-500 mt-16 flex flex-col gap-3 overflow-hidden py-5'>
        <h1 className='text-lg font-bold mt-3 ml-3'>Frequently Asked Questions</h1>
        <div className='h-full w-full flex gap-3 relative px-3 py-2'>
            <div className='bg-white w-2/3 h-full absolute left-0 md:relative p-3 rounded-r-xl shadow-md overflow-x-hidden'>
                <h2>Topics</h2>
                {QA.map((val, i) => (
                    <div key={i} className='h-auto flex flex-col'>
                        <button type="button" className='flex gap-2 items-center w-full text-left px-3 py-2' onClick={() => setShowQA(!showQA)}><HiOutlineChevronRight /> {val.topic}</button>
                        {showQA && (
                            <div className='flex flex-col'>
                                <button type="button" className='w-full text-left px-3 py-2'>{val.question.q1}</button>
                                <button type="button" className='w-full text-left px-3 py-2'>{val.question.q2}</button>
                                <button type="button" className='w-full text-left px-3 py-2'>{val.question.q3}</button>
                                <button type="button" className='w-full text-left px-3 py-2'>{val.question.q4}</button>
                                <button type="button" className='w-full text-left px-3 py-2'>{val.question.q5}</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default FAQs