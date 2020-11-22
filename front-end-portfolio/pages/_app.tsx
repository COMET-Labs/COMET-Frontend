import './globals.scss'
import Navbar from './navbar'
import Footer from './footer'

function MyApp({ Component, pageProps }) {
  return <div>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </div>
}

export default MyApp
