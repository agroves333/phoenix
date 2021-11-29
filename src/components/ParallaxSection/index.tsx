import React, {
  FC,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { Box, FlexProps, Grid } from 'theme-ui'
import { ThemeUIStyleObject } from '@theme-ui/css'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

interface Props extends FlexProps {
  children?: ReactNode
  bgImage?: string
  height?: string
  orientation?: 'left' | 'right'
  sx?: ThemeUIStyleObject
}

// const calculateMinHeight = (height: number, range: number): number => {
//   return height + height * range
// }
//
// const rand = (min = 0, max = 100) => {
//   return Math.floor(Math.random() * (+max - +min)) + +min
// }

const ParallaxSection: FC<Props> = ({
  children,
  height,
  bgImage,
  orientation = 'left',
  sx,
  ...props
}) => {
  const [offsetTop, setOffsetTop] = useState(0)
  const bgRef = useRef<HTMLDivElement>(null)
  // const { scrollY } = useViewportScroll()

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

  useLayoutEffect(() => {
    const onResize = () => {
      setOffsetTop(bgRef?.current?.offsetTop || 0)
    }

    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [bgRef])

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

  // const y = useTransform(scrollY, [offsetTop, offsetTop + 1], [0, -1], {
  //   clamp: false,
  // })

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
          padding: [2, 5],
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
          {children}
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
