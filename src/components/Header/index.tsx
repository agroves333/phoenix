import React, { FC } from 'react'
import { Box, Flex, Link, Text } from 'theme-ui'
import theme from '../../theme'

const Header: FC = () => (
  <Flex
    sx={{
      backgroundColor: 'rgba(24, 26, 27, 0.6)',
      zIndex: theme.zIndex.toolbar,
      position: 'fixed',
      top: 0,
      padding: 3,
      width: '100%',
      gridArea: 'header',
    }}
    as="header"
  >
    <Box
      mx={{
        margin: `0 auto`,
      }}
    >
      <h1 style={{ margin: 0, lineHeight: 1 }}>
        <Link
          href="/"
          sx={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          orange<Text color="primary">·</Text>groove
        </Link>
      </h1>
    </Box>
  </Flex>
)

export default Header
