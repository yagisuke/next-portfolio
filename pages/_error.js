import Layout from '../components/Layout'

export default ({ statusCode }) => (
  <Layout title="Error!">
  {statusCode
    ? `Could not load user data: Status Code ${statusCode}`
    : `Coudn't get that page, sorry!`}
  </Layout>
)
