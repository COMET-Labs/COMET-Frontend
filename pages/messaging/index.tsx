import Head from 'next/head';
import Layout from '../../components/layouts/default';
import styles from './messaging.module.scss';
import LeftSidebar from '../../components/messaging/LeftSideBar';
import ChatSection from '../../components/messaging/ChatSection';
import RightSidebar from '../../components/messaging/RightSideBar';

export default function Messenger() {
  return (
    <Layout darkTheme={false}>
    <div className={styles.messenger}>
      <div className={styles.messenger__leftSidebar}>
        <LeftSidebar />
      </div>
      <div className={styles.messenger__chatSection}>
        <ChatSection />
      </div>
      <div className={styles.messenger__rightSidebar}>
        <RightSidebar />
      </div>
    </div>
    </Layout>
  );
}
