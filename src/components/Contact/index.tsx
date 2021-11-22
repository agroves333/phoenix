import React, { FC, useRef } from 'react'
import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  Label,
  Select,
  Text,
  Textarea,
} from 'theme-ui'
import { ThemeUIStyleObject } from '@theme-ui/css'

interface Props {
  sx?: ThemeUIStyleObject
}

const Contact: FC<Props> = ({ sx }) => {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const serviceSelectRef = useRef<HTMLSelectElement>(null)
  const messageInputRef = useRef<HTMLTextAreaElement>(null)

  // @ts-ignore
  // @ts-ignore
  return (
    <Flex
      sx={{
        background: 'url(images/savannah.jpg) no-repeat center center fixed',
        backgroundSize: 'cover',
        py: 6,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        gap={2}
        columns={1}
        sx={{
          padding: 4,
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.85)',
          width: '50%',
          borderRadius: '4px',
          ...sx,
        }}
      >
        <Text as="h2" sx={{ fontSize: 6 }}>
          Contact
        </Text>
        {/* @ts-ignore */}
        <form name="contact" netlify>
          <Box>
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              type="text"
              sx={{ bg: 'white' }}
              ref={nameInputRef}
            />
          </Box>
          <Box>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              sx={{ bg: 'white' }}
              ref={emailInputRef}
            />
          </Box>
          <Box>
            <Label htmlFor="type">Service</Label>
            <Select name="type" ref={serviceSelectRef}>
              <option value="web">Website</option>
              <option value="mobile">Mobile</option>
              <option value="desktop">Desktop</option>
            </Select>
          </Box>
          <Box>
            <Label htmlFor="message">Message</Label>
            <Textarea
              name="name"
              ref={messageInputRef}
              sx={{ fontFamily: 'body', bg: 'white' }}
            />
          </Box>
          <input type="hidden" name="form-name" value="contact" />
          <Button type="submit">Send</Button>
        </form>
      </Grid>
    </Flex>
  )
}
export default Contact
