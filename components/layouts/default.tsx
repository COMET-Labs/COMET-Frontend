import { ReactNode } from 'react';
import NavBar from '../navbar';
import Footer from '../footer';
import Head from 'next/head';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }) => (
  <div>

    <Head>
      <title>Portfolio</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"></link>
      <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    </Head>
    <NavBar/>
    {children}
    <Footer />
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>

  </div>
);

export default Layout;
