import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='pb-4'>
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>
          Projects</motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-12 flex flex-col lg:flex-row lg:justify-center lg:gap-12'>
                    <div className='w-full lg:w-1/2 lg:max-w-md flex flex-col items-start'>
                        <motion.div
                         whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }} 
                        className='w-full text-left'>
                          <h3 className='mb-4 font-semibold text-2xl'>
                            {project.title}</h3>
                        </motion.div>
                        <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }} 
                        className='w-full flex justify-start'>
                        <img 
                        alt={project.title}
                        src={project.image}
                        width={300} 
                        height={300}
                        className='mb-6 rounded shadow-lg' loading='lazy'/>
                        </motion.div>
                    </div>
                    <motion.div
                     whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }} 
                    className='w-full lg:w-1/2 lg:max-w-md'>
                        <p className='mb-4 text-stone-400'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                        {project.technologies.map((tech, index) => (
                          <span className='mr-2 rounded bg-stone-900 
                          text-sm font-medium text-stone-30' key={index}>
                            {tech}
                          </span>
                        ))}
                        </div>

                          {project.url && (
      <a 
      href={project.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block px-2 py-2 bg-stone-100 text-black text-sm rounded-lg shadow hover:bg-stone-300 transition"
    >
      View Project
    </a>
  )}
                    </motion.div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Projects
