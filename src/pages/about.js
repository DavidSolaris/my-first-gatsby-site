// Step 1: Import React
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/tag.png"
      />
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage