import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
        <motion.h2
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 1, y: -100}}
         transition={{ duration: 0.5 }} className='my-10 text-center text-4xl'>
            Get in touch
            </motion.h2>
        <div className='text-center tracking-tighter'>
            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100}}
         transition={{ duration: 1 }}
         className='my-4'>
                {CONTACT.address}
                </motion.p>
                <motion.p
                whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 1, y: 100}}
         transition={{ duration: 0.5 }} className='my-4'>
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.a 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100}}
                transition={{ duration: 0.5 }}
                href={`mailto:${CONTACT.email}?subject=Portfolio Contact&body=Hello, I found your portfolio and would like to connect regarding opportunities.`}
                className='inline-block text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300 my-4 text-lg font-medium'
                aria-label={`Send email to ${CONTACT.email}`}
                title="Click to send me an email">
                    📧 {CONTACT.email}
                </motion.a>
            
        </div>
    </div>
  )
}

export default Contact
