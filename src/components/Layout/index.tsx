import React, { FC, ReactNode } from 'react'
import { Global } from '@emotion/react'

import { Box, ThemeProvider } from 'theme-ui'
import { Header, Footer } from 'components'
import globalStyles from '../../globalStyles'
import theme from 'theme'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Box
        sx={{
          gridTemplateAreas: `
            "header"
            "main"
            "footer"
          `,
        }}
      >
        <Header />
        <Box as="main" sx={{ flex: 1, gridArea: 'main' }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default Layout
