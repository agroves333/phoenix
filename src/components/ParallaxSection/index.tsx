import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Box, FlexProps, Grid } from 'theme-ui'
import { ThemeUIStyleObject } from '@theme-ui/css'
import { useInView } from 'react-intersection-observer'
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from 'framer-motion'

interface Props extends FlexProps {
  children?: ReactNode
  bgImage?: string
  height?: string
  sx?: ThemeUIStyleObject
}

const ParallaxSection: FC<Props> = ({
  children,
  height,
  bgImage,
  sx,
  ...props
}) => {
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)
  const { scrollY } = useViewportScroll()
  const imageParallaxY = useTransform(scrollY, [0, 300], [0, 0])

  const variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
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
    <Grid
      gap={0}
      columns={[1, null, 2]}
      sx={{
        height,
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          color: 'white',
          bg: 'bgDark',
          padding: [2, 4],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          {children}
        </motion.div>
      </Box>
      <Box sx={{}}>
        <motion.div style={{ y: imageParallaxY, height: '100%' }}>
          <Box
            sx={{
              background: `url(${bgImage})`,
              backgroundSize: 'cover',
              height: ['400px', '100%'],
            }}
          />
        </motion.div>
      </Box>
    </Grid>
  )
}

export default ParallaxSection
