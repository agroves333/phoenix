import React, { FC } from 'react'
import { Box, Grid } from 'theme-ui'
import theme from '../../theme'

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
    <Box></Box>
    <Box>© {new Date().getFullYear()}, Orange Groove Solutions</Box>
  </Grid>
)

export default Footer
