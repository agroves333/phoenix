import React, { FC, ReactNode } from 'react'
import { Flex } from 'theme-ui'

interface Props {
  orientation: string
  children: ReactNode
}

const FormGroup: FC<Props> = ({ children, orientation }) => {
  return (
    <Flex
      sx={{
        flexDirection: ['column', orientation === 'row' ? 'row' : undefined],
        marginBottom: 2,
      }}
    >
      {children}
    </Flex>
  )
}

export default FormGroup
