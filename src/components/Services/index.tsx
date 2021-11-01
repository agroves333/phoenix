import React, { FC } from 'react'
import Bucket from '../Bucket'

interface Props {}

const Services: FC<Props> = ({ children }) => (
  <Bucket as="section" title="" text="" icon="">
    {children}
  </Bucket>
)

export default Services
