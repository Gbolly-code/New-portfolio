import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
          <a href="/" className='text-4xl font-bold text-white-700 hover:text-gray-600 cursor-pointer'>
                GB
          </a>

          <div className="flex items-center gap-6 text-2xl">
            <motion.a href="https://github.com/Gbolly-code"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}>
                <FaGithub className='' />
            </motion.a>
          </div>
    </nav>
  )
}

export default Navbar
