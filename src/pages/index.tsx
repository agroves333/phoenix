import React from 'react'
import { Button, Grid, Heading, Text } from 'theme-ui'
import { Services, Hero, SEO, Layout } from 'components'
import ParallaxSection from '../components/ParallaxSection'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid
      gap={0}
      columns={[1]}
      sx={{
        gridTemplateAreas: `
        "hero"
        "services"
        "section1"
        "testimonials"
        "section2"
        "test"
        "contact"
      `,
      }}
    >
      <Hero video="/video/hero-bg.mp4" sx={{ gridArea: 'hero' }}>
        <Heading as="h1" sx={{ fontSize: [5, 7], p: 5 }}>
          Phoenix Transloading Service
        </Heading>
        <Heading as="h2" sx={{ fontSize: [4, 6], p: 5 }}>
          Serving Greater Savannah Area since 2019
        </Heading>
      </Hero>
      <Services sx={{ gridArea: 'services' }} />
      <ParallaxSection
        bgImage="https://149448400.v2.pressablecdn.com/wp-content/uploads/2019/03/business-consulting4-44.jpg"
        sx={{ gridArea: 'section1' }}
      >
        <Grid gap={3} columns={1}>
          <Heading as="h3" sx={{ fontSize: 6 }}>
            Consultancy services to expand your business rapidly.
          </Heading>
          <Text variant="body" sx={{ color: 'gray', fontSize: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            corporis dolorem omnis perferendis reiciendis suscipit, ullam? Animi
            culpa dolore fugiat impedit laborum libero minima, molestias natus
            nihil repudiandae sit suscipit?
          </Text>
          <Button sx={{ width: 'fit-content' }}>View More</Button>
        </Grid>
      </ParallaxSection>

      <Testimonials sx={{ gridArea: 'testimonials' }} />
      <ParallaxSection
        bgImage="https://149448400.v2.pressablecdn.com/wp-content/uploads/2019/03/business-consulting4-44.jpg"
        sx={{ gridArea: 'section2' }}
        orientation="right"
      >
        <Grid gap={3} columns={1}>
          <Heading as="h3" sx={{ fontSize: 6 }}>
            Consultancy services to expand your business rapidly.
          </Heading>
          <Text variant="body" sx={{ color: 'gray', fontSize: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            corporis dolorem omnis perferendis reiciendis suscipit, ullam? Animi
            culpa dolore fugiat impedit laborum libero minima, molestias natus
            nihil repudiandae sit suscipit?
          </Text>
          <Button sx={{ width: 'fit-content' }}>View More</Button>
        </Grid>
      </ParallaxSection>
      <Testimonials sx={{ gridArea: 'test' }} />
      <Contact />
    </Grid>
  </Layout>
)

export default IndexPage
