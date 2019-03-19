import Layout from '../../components/Layout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/${props.slug}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-post" title="React Post" />
      <PostLink slug="vue-post" title="Vue Post" />
      <PostLink slug="angular-post" title="Angular Post" />
      <PostLink slug="riot-post" title="Riot Post" />
    </ul>
  </Layout>
)

export default Blog
