import Layout from '../../components/Layout'

const Post = (props) => (
  <Layout title={props.url.query.title}>
    <p>Post!</p>
  </Layout>
)

export default Post
