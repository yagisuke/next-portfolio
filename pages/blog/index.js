import Layout from '../../components/Layout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink title="React" />
      <PostLink title="Vue" />
      <PostLink title="Angular" />
      <PostLink title="Riot" />
    </ul>
  </Layout>
)

export default Blog
