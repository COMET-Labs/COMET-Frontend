import React from 'react';
import Avatar from './Avatar';
import Wrapper from './Wrapper';
import Divider from './Divider';
import styles from './ChatSection.module.scss';

const ChatSection = () => {
  return (
    <div className={styles.chatSection}>
      <div className={styles.header}>
        <Wrapper mx='1rem' px='0.4rem' py='0.4rem'>
          <div className={styles.header__container}>
            <div className={styles.header__left}>
              <Avatar size='40px' />
              <div className={styles.header__content}>
                <p className={styles.header__title}>Coding</p>
                <p className={styles.header__subTitle}>54 Online</p>
              </div>
            </div>
            <div className={styles.header__right}>
              <div className='icon__container'>
                <img
                  src='/assets/search.svg'
                  alt='serach icon'
                  className='icon'
                />
              </div>
              <div className='icon__container'>
                <img src='/assets/more.svg' alt='more icon' className='icon' />
              </div>
            </div>
          </div>
        </Wrapper>
        <Divider />
      </div>
      <div className={styles.main}>
        <div>main chat area</div>
      </div>
      <Divider />
      <div className={styles.footer}>
        <Wrapper mx='1rem' px='0.4rem' py='1rem'>
          <div className={styles.footer__container}>
            <div className='icon__container'>
              <img src='/assets/plus.svg' alt='serach icon' className='icon' />
            </div>
            <div className={styles.footer__input}>
              <input type='text' />
            </div>
            <div className='icon__container'>
              <img src='/assets/send.svg' alt='more icon' className='icon' />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default ChatSection;
