import React, { FC } from 'react'
import { Box, Flex } from 'theme-ui'
import { Video } from 'components'
import { ThemeUIStyleObject } from '@theme-ui/css'

interface Props {
  video?: string
  image?: string
  sx?: ThemeUIStyleObject
}

const Hero: FC<Props> = ({ image, video, sx, children }) => (
  <Flex
    sx={{
      width: '100%',
      height: 'vh',
      color: 'white',
      background: image && `url(${image})`,
      justifyContent: 'center',
      overflow: 'hidden',
      ...sx,
    }}
    as="section"
  >
    {video && <Video src={video} autoPlay muted loop />}
    <Box sx={{ zIndex: 1 }}>{children}</Box>
  </Flex>
)

export default Hero
