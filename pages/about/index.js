import Layout from '../../components/Layout'
import { Component } from 'react'
import fetch from 'isomorphic-unfetch'

class About extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/yagisuke')
    const data = await res.json()
    return { user: data }
  }

  render() {
    const { user } = this.props
    return (
      <Layout title="About">
        <p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            {user.bio}
          </a>
        </p>
        <img src={user.avatar_url} alt="me" height="200px" />
      </Layout>
    )
  }
}

export default About
