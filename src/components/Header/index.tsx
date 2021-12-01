import React, { FC, ReactNode } from 'react'
import { Box, Button, Flex, Grid, Image, Link, Text } from 'theme-ui'
import { FaPhone } from 'react-icons/fa'

import theme from 'theme'

const Header: FC = () => {
  const handleMenuClick = () => {
    console.log('open')
  }

  return (
    <Flex
      sx={{
        backgroundColor: 'white',
        zIndex: theme.zIndex.toolbar,
        position: 'fixed',
        top: 0,
        padding: 3,
        width: '100%',
        gridArea: 'header',
        justifyContent: ['start', 'space-between'],
        alignItems: 'center',
      }}
      as="header"
    >
      <Flex
        sx={{
          alignItems: 'center',
        }}
      >
        <Button
          sx={{
            display: ['block', 'none'],
          }}
          onClick={handleMenuClick}
        >
          ☰
        </Button>
        <Flex
          sx={{
            alignItems: 'center',
            marginLeft: 3,
          }}
        >
          <Image
            src="/images/phoenix.png"
            sx={{ height: '75px', marginRight: 2 }}
          />
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1 style={{ margin: 0, lineHeight: 1, fontSize: 54 }}>
              <Link
                href="/"
                sx={{
                  color: 'primary',
                  textDecoration: 'none',
                  fontFamily: 'Bebas Neue',
                }}
              >
                Phoenix
              </Link>
            </h1>
            <Text sx={{ fontSize: 2 }}>Transload Services</Text>
          </Flex>
        </Flex>
      </Flex>

      <Grid
        columns={4}
        sx={{
          fontSize: 20,
          display: ['none', 'block'],
        }}
      >
        <HeaderLink href="#what-we-do">What We Do</HeaderLink>
        <HeaderLink href="#testimonials">Our Clients</HeaderLink>
        <HeaderLink href="#contact">Contact</HeaderLink>
        <HeaderLink
          href="tel:9126048114"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Box as={FaPhone} sx={{ marginRight: '10px' }} />
          (912) 604-8114
        </HeaderLink>
      </Grid>
    </Flex>
  )
}

const HeaderLink = ({
  children,
  sx,
  ...props
}: {
  children: ReactNode
  sx?: any
  href?: string
}) => (
  <Link
    {...props}
    sx={{
      ...sx,
      color: 'text',
      cursor: 'pointer',
      textDecoration: 'none',
      ':hover': {
        color: 'primary',
      },
    }}
  >
    {children}
  </Link>
)

export default Header
