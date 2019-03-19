import Link from 'next/link'
import { Component } from 'react'

import Layout from '../components/Layout'

class Index extends Component {
  render() {
    return (
      <Layout title="Home">
        <Link href="/about">
          <a>Go to About</a>
        </Link>
        <p>Welcome to the home page.</p>
      </Layout>
    )
  }
}

export default Index
