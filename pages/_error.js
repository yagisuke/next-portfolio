import Layout from '../components/Layout'

export default (props) => (
  <Layout title="Error!">
  {props.statusCode
    ? `Could not load user data: Status Code ${props.statusCode}`
    : `Coudn't get that page, sorry!`}
  </Layout>
)
