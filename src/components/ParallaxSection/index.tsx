import React, { FC, useEffect, useState } from 'react'
import { Box, Button, FlexProps, Grid, Heading, Text } from 'theme-ui'
import { ThemeUIStyleObject } from '@theme-ui/css'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'gatsby'

interface Props extends FlexProps {
  title?: string
  text?: string
  link?: string
  bgImage?: string
  height?: string
  orientation?: 'left' | 'right'
  sx?: ThemeUIStyleObject
}

const ParallaxSection: FC<Props> = ({
  title,
  text,
  link,
  height,
  bgImage,
  orientation = 'left',
  sx,
  ...props
}) => {
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)
  const variants = {
    hidden: { x: orientation === 'left' ? -100 : 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }

  const controls = useAnimation()
  const { ref: childrenRef, inView } = useInView()

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
        overflow: 'hidden',
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          color: 'white',
          bg: 'bgDark',
          padding: [3, 5],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          order: orientation === 'left' ? 1 : 2,
        }}
      >
        <motion.div
          ref={childrenRef}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <Grid gap={3} columns={1} sx={{ p: [2, 3] }}>
            <Heading as="h3" sx={{ fontSize: [4, 6] }}>
              {title}
            </Heading>
            <Text variant="body" sx={{ color: 'gray', fontSize: 3 }}>
              {text}
            </Text>
            {link && (
              <Link to={link}>
                <Button sx={{ width: 'fit-content' }}>View More</Button>
              </Link>
            )}
          </Grid>
        </motion.div>
      </Box>
      <Box
        sx={{
          background: `url(${bgImage}) no-repeat center center fixed`,
          backgroundSize: 'cover',
          order: orientation === 'left' ? 2 : 1,
          height: '100%',
        }}
      />
    </Grid>
  )
}

export default ParallaxSection
