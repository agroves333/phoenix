import React, { FC } from 'react'
import { Flex } from 'theme-ui'
import theme from '../../theme'

interface Props {}

const Footer: FC<Props> = ({ children }) => (
  <Flex
    sx={{
      color: 'primary',
      backgroundColor: 'p',
      padding: '1rem',
      zIndex: theme.zIndex.toolbar,
    }}
    as="footer"
  >
    {children}
  </Flex>
)

export default Footer
