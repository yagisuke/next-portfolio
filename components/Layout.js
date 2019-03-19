import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Layout = (props) => (
  <div className="root">
    <Head>
      <title>Next Portfolio</title>
    </Head>
    <header>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/hireme"><a>Hire Me</a></Link>
    </header>
      <h1>{props.title}</h1>
      {props.children}
    <footer>
      &copy; {new Date().getFullYear()}
    </footer>
    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        font-size: 1.2rem;
        background-color: indigo;
      }

      header a {
        color: darkgrey;
        text-decoration: none;
      }

      header a:hover {
        color: lightgrey;
      }

      footer {
        padding: 1em;
      }
    `}</style>
  </div>
)

export default Layout
