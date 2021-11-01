import React, { FC } from 'react'
import { Box, Flex, Link, Text } from 'theme-ui'
import theme from '../../theme'

const Header: FC = () => (
  <Flex
    sx={{
      backgroundColor: 'rgba(24, 26, 27, 0.6)',
      padding: '1rem',
      zIndex: theme.zIndex.toolbar,
    }}
    as="header"
  >
    <Box
      mx={{
        margin: `0 auto`,
      }}
    >
      <h1 style={{ margin: 0 }}>
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
