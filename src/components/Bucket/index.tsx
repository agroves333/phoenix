import React, { FC, ReactNode } from 'react'
import { Box, Button, Flex, FlexProps, Heading, Text } from 'theme-ui'
import { FaArrowRight } from 'react-icons/fa'

interface Props extends FlexProps {
  title?: string
  text?: string
  icon?: ReactNode
}

const Bucket: FC<Props> = ({ title, text, icon, ...props }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: 'text',
      bg: 'bgLight',
      padding: '4',
      textAlign: 'center',
    }}
    {...props}
  >
    <Box>
      <Box sx={{ height: '4rem' }}>{icon}</Box>
      <Heading as="h2" my={1} sx={{ fontSize: 4 }}>
        {title}
      </Heading>
      <Box my={3} sx={{ fontSize: 3 }}>
        {text}
      </Box>
    </Box>
    <Button
      variant="secondary"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <Text sx={{ mr: 2 }}>Learn More</Text>
      <FaArrowRight />
    </Button>
  </Flex>
)

export default Bucket
