import React from 'react'
import { GrMailOption } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";

const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h1 className='text-5xl' data-aos="zoom-in-up">Get in Touch</h1>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                    Drop me a line, give me a call,or send me a message,by submitting the form...
                </p>
                <div className='flex items-center gap-3' data-aos="zoom-in-up">
                <GrMailOption  size={30}/> ndoll7@gmail.com
                </div>
                <div className='flex items-center gap-3' data-aos="zoom-in-up">
                <LuPhoneCall size={30} /> 000000001
            </div>
                </div>
                <div className='space-y-8'>
                        <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                            <label htmlFor='name'>Name</label>
                            <input  type='text' id='name' className='bg-transparent border border-cyan-500 h-[40px]'></input>
                        </div>
                        <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                            <label htmlFor='email'>Email</label>
                            <input type='text' className='bg-transparent border border-cyan-500 h-[40px]' id='email'/>
                        </div>
                        <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                            <label htmlFor='msg'>Message</label>
                            <textarea className='bg-transparent border border-cyan-500 ' rows={8} id='msg'></textarea>
                        </div>
                        <button className='bg-cyan-500 p-2 px-6' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
