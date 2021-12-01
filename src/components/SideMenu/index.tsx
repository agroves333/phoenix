import React, { FC } from 'react'
import { Box } from 'theme-ui'
import { motion } from 'framer-motion'

interface Props {}

const SideMenu: FC<Props> = () => {
  const variants = {
    hidden: { x: document.body.clientWidth },
    visible: {
      x: ,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <Box></Box>
    </motion.div>
  )
}
export default SideMenu
