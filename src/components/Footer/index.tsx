import React, { FC } from 'react'
import { Box, Flex, Grid, Link, Text } from 'theme-ui'
import theme from '../../theme'
import { FaPhone } from 'react-icons/fa'

interface Props {}

const Footer: FC<Props> = () => (
  <Grid
    sx={{
      height: '100px',
      color: 'white',
      backgroundColor: 'primary',
      padding: '1rem',
      zIndex: theme.zIndex.toolbar,
      gridArea: 'footer',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '8fr 1fr',
    }}
    as="footer"
  >
    <Flex sx={{ alignItems: 'center', fontSize: [2, 3] }}>
      <Box as={FaPhone} sx={{ marginRight: '10px' }} />
      <Link
        href="tel:9126048114"
        sx={{ textDecoration: 'none', color: 'white' }}
      >
        (912) 604-8114
      </Link>
    </Flex>
    <Box>© {new Date().getFullYear()}, Phoenix Transload Services, LLC.</Box>
  </Grid>
)

export default Footer
