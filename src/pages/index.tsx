import React from 'react'
import { Button, Grid, Heading, Link, Text } from 'theme-ui'
import { Hero, SEO, Layout } from 'components'
import ParallaxSection from '../components/ParallaxSection'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid
      gap={0}
      columns={[1]}
      marginTop="114px"
      sx={{
        gridTemplateAreas: `
        "hero"
        "section1"
        "section2"
        "testimonials"
        "section3"
        "contact"
      `,
      }}
    >
      <Hero
        video="/video/hero-bg.mp4"
        sx={{ gridArea: 'hero', textAlign: 'center' }}
      >
        <Heading
          as="h2"
          sx={{ fontSize: [4, 6], p: [2, 5], maxWidth: '800px' }}
        >
          Full service transloading and warehouse operations.
        </Heading>
        <Text sx={{ fontSize: [4, 6] }}>
          Call now!{' '}
          <Link
            href="tel:9126048114"
            sx={{ textDecoration: 'none', color: 'primary' }}
          >
            (912) 604-8114
          </Link>
        </Text>
      </Hero>
      <ParallaxSection
        bgImage="https://st2.depositphotos.com/1323776/5658/i/950/depositphotos_56582471-stock-photo-trucks-loading-unloading-at-warehouse.jpg"
        title="What We Do"
        text="Locally owned and operated in and around the Savannah area, Phoenix
            Transload Services supplies warehouses with cooperational teams
            consisting of the staff needed to make an operation work. Phoenix
            provides customers with not only capable unloaders, but also fills
            other positions when the needs present themselves, including
            verifiers and clamp operators. Phoenix works with warehouse
            management on an individualized basis, modeling teams created to
            support the specific needs of every customer, always aiming to fit
            exactly where needed. It’s this flexibility that dependably allows
            for needs to be met and problems to be solved."
        sx={{ gridArea: 'section1' }}
      />
      <ParallaxSection
        bgImage="https://st2.depositphotos.com/1323776/5658/i/950/depositphotos_56582471-stock-photo-trucks-loading-unloading-at-warehouse.jpg"
        title="Quality"
        text="With a drive to hit every goal and a tendency to surpass
            expectations, Phoenix has grown dramatically since its birth, and
            has only kept growing since then. Phoenix is always hiring driven,
            capable workers with stamina, consistency, determination, and a
            sense of constant improvement that serves to elevate the operations
            and the needs of the customer. Employees and customers alike find
            themselves satisfied beyond expectations time and time again."
        sx={{ gridArea: 'section2' }}
        orientation="right"
      />
      <Testimonials sx={{ gridArea: 'testimonials' }} />
      <ParallaxSection
        bgImage="https://st2.depositphotos.com/1001877/5813/i/950/depositphotos_58139055-stock-photo-forklift-truck-in-warehouse-or.jpg"
        title="Flexibility"
        text="When a Phoenix team becomes aligned with a customer’s operation,
            freight is guaranteed to move quickly, effectively, and
            consistently. Every team is composed of effective individuals
            overseen by knowledgeable leads, in every operation involved.
            Phoenix brings enthusiastic, hardworking hands to existing
            structures, structured itself to support the systems already in
            place wherever they go, ready and able to bend and to fit where
            support is most needed."
        sx={{ gridArea: 'section3' }}
        orientation="left"
      />

      <Contact />
    </Grid>
  </Layout>
)

export default IndexPage
