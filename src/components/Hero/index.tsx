import React, { FC } from 'react'
import { Flex } from 'theme-ui'
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
    <Flex
      sx={{
        zIndex: 1,
        position: 'absolute',
        height: '100%',
        alignItems: 'center',
      }}
    >
      {children}
    </Flex>
  </Flex>
)

export default Hero
