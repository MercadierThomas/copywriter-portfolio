import { motion } from 'framer-motion'

export const TerminalHeader = () => (
  <motion.span 
    animate={{ opacity: [0, 1, 0] }}
    transition={{ repeat: Infinity, duration: 3 }}
    className="ml-2"
  >
    <div className="bg-code-bg p-4 font-mono">
      <span className="text-email-primary">$</span> 
      <span className="text-gray-300 ml-2">thomas_dev_portfolio --mode=email-expert</span>
    </div>
  </motion.span>
  )