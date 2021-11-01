import React from 'react'

import Layout from 'components/Layout'
import Seo from 'components/SEO'
import Hero from '../components/Hero'
import { Heading } from 'theme-ui'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero video="/video/hero-bg.mp4">
      <Heading as="h1" sx={{ fontSize: [5, 7] }}>
        Web, Mobile, and Desktop apps for the modern company.
      </Heading>
    </Hero>
  </Layout>
)

export default IndexPage
