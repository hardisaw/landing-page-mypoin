import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {
  return (
      <Layout 
      pageHeading='Home Page'
      pageTitle='Home Page'
      >
        <p>Welcome to My Home Page MTF</p>
        <StaticImage src="https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1852&q=80" 
        alt="A Island"
        loading="eager"
        layout="constrained"
        />
      </Layout>
  )
}

export const Head = () => <title>Home Page</title>


export default HomePage