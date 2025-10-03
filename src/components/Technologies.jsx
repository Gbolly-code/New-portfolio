import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb, SiNestjs, SiTypescript } from 'react-icons/si'
import { FaDatabase, FaFire, FaNodeJs, FaReact } from 'react-icons/fa'
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
  const technologies = [
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: 'React' },
    { icon: <TbBrandNextjs className="text-7xl" />, name: 'Next.js' },
    { icon: <SiMongodb className='text-7xl text-cyan-500' />, name: 'Mongodb' },
    { icon: <FaNodeJs className='text-7xl text-green-500' />, name: 'Node js' },
    { icon: <SiTailwindcss className='text-7xl text-blue-500' />, name: 'Tailwind CSS' },
    { icon: <SiNestjs className='text-7xl text-red-500' />, name: 'Nestjs' },
    { icon: <FaFire className='text-7xl text-orange-500' />, name: 'Firebase' },
    { icon: <FaDatabase className='text-7xl text-white-500' />, name: 'Supabase' },
    { icon: <FaReact className='text-7xl text-blue-500' />, name: 'React Native' },
    { icon: <SiTypescript className='text-7xl text-blue-500' />, name: 'TypeScript' }
  ];

  return (
    <div className='pb-24'>
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }} className='my-20 text-center text-4xl'>
            Technologies</motion.h2>
            
            <div className='overflow-hidden'>
                <div className='flex animate-marquee'>
                    {/* First set of technologies */}
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={`first-${index}`}
                            initial='initial'
                            animate='animate'
                            variants={iconVariants(2.5 + index * 0.5)}
                            className='flex flex-col items-center p-4 flex-shrink-0'
                        >
                            {tech.icon}
                            <span className='mt-2 text-lg font-medium'>{tech.name}</span>
                        </motion.div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={`second-${index}`}
                            initial='initial'
                            animate='animate'
                            variants={iconVariants(2.5 + index * 0.5)}
                            className='flex flex-col items-center p-4 flex-shrink-0'
                        >
                            {tech.icon}
                            <span className='mt-2 text-lg font-medium'>{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default Technologies
