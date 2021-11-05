import React, { FC, useEffect, useState } from 'react'
import { Grid, Heading } from 'theme-ui'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ThemeUIStyleObject } from '@theme-ui/css'
import Testimonial from './components/Testimonial'

interface Props {
  sx?: ThemeUIStyleObject
}

const Testimonials: FC<Props> = ({ sx }) => {
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)

  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
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
    <Grid gap={4} columns={1} sx={{ p: 4, ...sx }}>
      <Heading as="h1" sx={{ fontSize: 6 }}>
        Testimonials
      </Heading>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <Grid gap={4} columns={[1, 2]}>
          <Testimonial
            avatar="https://149448400.v2.pressablecdn.com/wp-content/uploads/2019/03/business-consulting3-1.png"
            name="Michael McDonald"
            title="Client"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum expedita, iure laboriosam maxime perspiciatis possimus quas quos ratione reprehenderit saepe? Aut consequuntur deleniti eius excepturi in nemo neque officiis praesentium!"
          />
          <Testimonial
            avatar="https://149448400.v2.pressablecdn.com/wp-content/uploads/2019/03/business-consulting3-2.png"
            name="Freddie Mercury"
            title="Client"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum expedita, iure laboriosam maxime perspiciatis possimus quas quos ratione reprehenderit saepe? Aut consequuntur deleniti eius excepturi in nemo neque officiis praesentium!"
          />
        </Grid>
      </motion.div>
    </Grid>
  )
}
export default Testimonials
