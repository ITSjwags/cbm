import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import seoKeywords from '../data/keywords'

const Writing = () => (
  <Layout>
    <SEO title="Home" keywords={seoKeywords} />
    <h1>Writing</h1>
  </Layout>
)

export default Writing
