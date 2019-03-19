import { withRouter } from 'next/router'
import { Component } from 'react'

import Layout from '../../components/Layout'

class Post extends Component {
  render() {
    const { router } = this.props

    return (
      <Layout title={router.query.title}>
        <p>Post!</p>
      </Layout>
    )
  }
}

export default withRouter(Post)
