import React, { FC, ReactNode } from 'react'
import { Flex, Grid, Image, Link, Text } from 'theme-ui'
import theme from 'theme'

const Header: FC = () => (
  <Flex
    sx={{
      backgroundColor: 'white',
      zIndex: theme.zIndex.toolbar,
      position: 'fixed',
      top: 0,
      padding: 3,
      width: '100%',
      gridArea: 'header',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    as="header"
  >
    <Flex
      sx={{
        alignItems: 'center',
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
        <Text sx={{ fontSize: 14 }}>Transloading Services</Text>
      </Flex>
    </Flex>

    <Grid
      columns={3}
      sx={{
        fontSize: 20,
      }}
    >
      <HeaderLink>What we do</HeaderLink>
      <HeaderLink>Our Clients</HeaderLink>
      <HeaderLink>Contact</HeaderLink>
    </Grid>
  </Flex>
)

const HeaderLink = ({ children }: { children: ReactNode }) => (
  <Text
    sx={{
      cursor: 'pointer',
      ':hover': {
        color: 'primary',
      },
    }}
  >
    {children}
  </Text>
)

export default Header
