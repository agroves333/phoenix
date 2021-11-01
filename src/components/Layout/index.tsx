/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC, ReactNode } from 'react'
import { Global } from '@emotion/react'

import { Flex } from 'theme-ui'
import { Header, Footer } from 'components'
import globalStyles from '../../globalStyles'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Flex
        sx={{
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Header />
        <Flex
          as="main"
          sx={{
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          {children}
        </Flex>
        <Footer>© {new Date().getFullYear()}, Orange Groove Solutions</Footer>
      </Flex>
    </>
  )
}

export default Layout
