// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
          <p>I'm making this by following the Gatsby Tutorial.</p>
          <StaticImage
              alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
              src="../images/clifford.webp"
          />
          <StaticImage
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="../images/clifford.jpg"
          />
          <StaticImage
              src={"https://www.stylist.co.uk/images/app/uploads/2023/08/31110025/backsliding-1120x1120.jpg?auto=format%2Ccompress&fit=max&fm=webp&monochrome=29000000&q=75&w=1400"}
              alt={"Backsliding"}
          />
      </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage

