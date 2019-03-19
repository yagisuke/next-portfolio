import { Component } from 'react'

import Layout from '../../components/Layout'

class HireMe extends Component {
  render() {
    return (
      <Layout title="Hire Me">
        <p>
          <s>
            You can hire me at{" "}
            <a href="https://twitter.com/yagi_suke" target="_blank" rel="noopener noreferrer">
              @yagi_suke
            </a>
          </s>
        </p>
      </Layout>
    )
  }
}

export default HireMe
