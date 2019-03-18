import Layout from '../../components/Layout'
import Link from 'next/link'

export default () => (
  <Layout title="About">
    <Link href="/">
      <a>Go to Home</a>
    </Link>
    <p>A Javascript programmer.</p>
    <img src="/static/avatar.jpg" alt="me" height="200px" />
  </Layout>
)
