import React, { FC } from 'react'
import { Box, Flex } from 'theme-ui'
import { Video } from 'components'

interface Props {
  video?: string
  image?: string
}

const Hero: FC<Props> = ({ image, video, children }) => (
  <Flex
    sx={{
      width: '100%',
      height: '100%',
      color: 'white',
      background: image && `url(${image})`,
      justifyContent: 'center',
      alignItems: 'center',
      padding: [3, 5],
    }}
    as="section"
  >
    {video && <Video src={video} autoPlay muted loop />}
    <Box sx={{ zIndex: 1 }}>{children}</Box>
  </Flex>
)

export default Hero
