import React, { FC } from 'react'
import { BoxProps, Flex } from 'theme-ui'

interface Props extends BoxProps {
  title?: string
  text?: string
  icon?: string
}

const Bucket: FC<Props> = ({ title, text, icon, ...props }) => (
  <Flex
    sx={{
      color: 'text',
      backgroundColor: 'white',
      padding: '1rem',
    }}
    {...props}
  >
    {icon}
    {title}
    {text}
  </Flex>
)

export default Bucket
