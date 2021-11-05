import React, { FC, useEffect, useState } from 'react'
import Bucket from '../Bucket'
import { Grid } from 'theme-ui'
import { FaSitemap, FaMobile, FaDesktop } from 'react-icons/fa'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ThemeUIStyleObject } from '@theme-ui/css'
import theme from '../../theme'

interface Props {
  sx?: ThemeUIStyleObject
}

const Services: FC<Props> = ({ sx }) => {
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)

  const variants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: -150,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }

  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView === true) {
      setHasAnimated(true)
    }
  }, [inView])

  useEffect(() => {
    if (!hasAnimated) {
      if (inView) {
        controls.start('visible')
      }
      if (!inView) {
        controls.start('hidden')
      }
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <Grid
        gap={4}
        columns={[1, 3]}
        sx={{
          zIndex: 2,
          position: 'relative',
          marginX: 5,
          ...sx,
        }}
      >
        <Bucket
          icon={
            <FaSitemap size="3rem" color={theme?.colors?.primary as string} />
          }
          title="Web"
          text="We specialize in web app design, development, and cloud management."
        />
        <Bucket
          icon={
            <FaMobile size="3rem" color={theme?.colors?.primary as string} />
          }
          title="Mobile"
          text="Cross-platform mobile development with React Native and Ionic frameworks."
        />
        <Bucket
          icon={
            <FaDesktop size="3rem" color={theme?.colors?.primary as string} />
          }
          title="Desktop"
          text="Web-based desktop applications using Electron."
        />
      </Grid>
    </motion.div>
  )
}
export default Services
