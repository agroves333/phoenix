import React, { FC, useRef } from 'react'
import { Button, Flex, Grid, Input, Label, Text, Textarea } from 'theme-ui'
import { ThemeUIStyleObject } from '@theme-ui/css'
import { FormGroup } from '../index'

interface Props {
  sx?: ThemeUIStyleObject
}

const Contact: FC<Props> = ({ sx }) => {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const messageInputRef = useRef<HTMLTextAreaElement>(null)

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
        <form name="contact" data-netlify="true">
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              type="text"
              sx={{ bg: 'white' }}
              ref={nameInputRef}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              sx={{ bg: 'white' }}
              ref={emailInputRef}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              name="name"
              ref={messageInputRef}
              sx={{ fontFamily: 'body', bg: 'white' }}
            />
          </FormGroup>
          <input type="hidden" name="form-name" value="contact" />
          <Button type="submit" sx={{ marginTop: 4 }}>
            Send
          </Button>
        </form>
      </Grid>
    </Flex>
  )
}
export default Contact
