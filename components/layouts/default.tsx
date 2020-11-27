import { ReactNode } from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
