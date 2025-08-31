import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb, SiTypescript } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { SiTailwindcss } from 'react-icons/si'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }} className='my-20 text-center text-4xl'>
            Technologies</motion.h2>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }} className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                initial='initial'
                animate='animate'
                variants={iconVariants(2.5)} className='flex flex-col items-center p-4'>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                    <span className='mt-2 text-lg font-medium'>React</span>
                </motion.div>
                <motion.div
                 initial='initial'
                animate='animate'
                variants={iconVariants(3)}
                className='flex flex-col items-center p-4'>
                    <TbBrandNextjs className="text-7xl" />
                    <span className='mt-2 text-lg font-medium'>Next.js</span>
                </motion.div>
                <motion.div
                initial='initial'
                animate='animate'
                variants={iconVariants(5)} className='flex flex-col items-center p-4'>
                    <SiMongodb className='text-7xl text-cyan-500' />
                    <span className='mt-2 text-lg font-medium'>Mongodb</span>
                </motion.div>
                <motion.div
                initial='initial'
                animate='animate'
                variants={iconVariants(6)} className='flex flex-col items-center p-4'>
                     <FaNodeJs className='text-7xl text-green-500' />
                     <span className='mt-2 text-lg font-medium'>Node js</span>
                </motion.div>

                <motion.div
                initial='initial'
                animate='animate'
                variants={iconVariants(3)} className='flex flex-col items-center p-4'>
                     <SiTailwindcss className='text-7xl text-blue-500' />
                     <span className='mt-2 text-lg font-medium'>Tailwind CSS</span>
                </motion.div>

                <motion.div
                initial='initial'
                animate='animate'
                variants={iconVariants(3)} className='flex flex-col items-center p-4'>
                     <SiTypescript className='text-7xl text-blue-500' />
                     <span className='mt-2 text-lg font-medium'>TypeScript</span>
                </motion.div>
            </motion.div>
    </div>
  )
}

export default Technologies
