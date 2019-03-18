import Link from 'next/link'

export default () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <a>Go to Home</a>
    </Link>
    <p>A Javascript programmer.</p>
    <img src="/static/avatar.jpg" alt="me" height="200px" />
  </div>
)