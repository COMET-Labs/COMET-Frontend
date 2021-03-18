import Head from 'next/head';
import React from 'react';
import Avatar from './Avatar';
import Divider from './Divider';
import EachGroup from './EachGroup';
import styles from './LeftSideBar.module.scss';

const data = [
  {
    id: Math.floor(Math.random() * 999999),
    title: 'Cloud Computing',
    description: 'What do you know about AWS ?',
    image: 'https://www.w3schools.com/w3images/avatar5.png',
  },
  {
    id: Math.floor(Math.random() * 999999),
    title: 'Quantum Computing',
    description: 'The sceret died along with Niels Bhor?',
    image: 'https://www.w3schools.com/w3images/avatar5.png',
  },
  {
    id: Math.floor(Math.random() * 999999),
    title: 'Coding',
    description: 'Long channenge starts tomorrow',
    image: 'https://www.w3schools.com/w3images/avatar5.png',
  },
  {
    id: Math.floor(Math.random() * 999999),
    title: 'Robotics',
    description: 'Primary cause is imprfect wiring',
    image: 'https://www.w3schools.com/w3images/avatar5.png',
  },
  {
    id: Math.floor(Math.random() * 999999),
    title: 'IOT',
    description: 'I don not have node MCU sir',
    image: 'https://www.w3schools.com/w3images/avatar5.png',
  },
  {
    id: Math.floor(Math.random() * 999999),
    title: 'Machine Learning',
    description: 'Please explain',
    image: 'https://www.w3schools.com/w3images/avatar5.png',
  },
  {
    id: Math.floor(Math.random() * 999999),
    title: 'Cloud Computing',
    description: 'What do you know about AWS ?',
    image: 'https://www.w3schools.com/w3images/avatar5.png',
  },
];

const LeftSidebar = () => {
  return (
    <div>
      <div className={styles.header}>
        <Avatar />
        <div className={styles.header__title}>
          <h2>Technical Clubs</h2>
        </div>
        <div></div>
      </div>
      <Divider my={'0.75em'} />
      <div className={styles.body}>
        {data.map((item) => (
          <EachGroup
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <Divider my={'0.75rem'} />
      <div className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.eachCategory}>
            <Avatar />
            <p className={styles.category__name}>Clubs</p>
          </div>

          <div className={styles.eachCategory}>
            <Avatar />
            <p className={styles.category__name}>Alumni</p>
          </div>

          <div className={styles.eachCategory}>
            <Avatar />
            <p className={styles.category__name}>My Stats</p>
          </div>

          <div className={styles.eachCategory}>
            <Avatar />
            <p className={styles.category__name}>Ventures</p>
          </div>

          <div className={styles.eachCategory}>
            <Avatar />
            <p className={styles.category__name}>OS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
