import React, { FC } from 'react'
import { Avatar, Box, Flex, FlexProps, Grid, Image, Text } from 'theme-ui'

interface Props extends FlexProps {
  avatar?: string
  name?: string
  text?: string
}

const Testimonial: FC<Props> = ({ avatar, name, title, text, ...props }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: 'text',
      bg: 'bgLight',
      padding: '4',
      my: 4,
    }}
    {...props}
  >
    <Box sx={{ height: '40px', width: 'auto', mt: '-50px' }}>
      <Image src="/images/quote.png" sx={{ height: '30px' }} />
    </Box>

    <Box my={[0, 3]}>
      <Text sx={{ mr: 2 }}>{text}</Text>
    </Box>
    <Grid gap={2} columns="1fr 4fr" sx={{ alignItems: 'center' }}>
      <Avatar size={70} src={avatar} />
      <Grid gap={1} columns={1}>
        <Text sx={{ fontSize: 4 }}>{name}</Text>
        <Text>{title}</Text>
      </Grid>
    </Grid>
  </Flex>
)

export default Testimonial
