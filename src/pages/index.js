import * as React from "react"
import Layout from "../components/layout"

const HomePage = () => {
  return (
      <Layout 
      pageHeading='Home Page'
      pageTitle='Home Page'
      >
        <p>Welcome to My Home Page MTF</p>
      </Layout>
  )
}

export const Head = () => <title>Home Page</title>


export default HomePage