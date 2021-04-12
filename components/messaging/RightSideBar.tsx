import styles from './RightSideBar.module.scss';
import Avatar from './Avatar';
import Divider from './Divider';
import EachGroup from './EachGroup';
import Wrapper from './Wrapper';

const RightSidebar = () => {
  return (
    <div>
      <div className={styles.header}>
        <Wrapper mx='1rem' px='0.4rem' py='0.95rem'>
          <div className={styles.header__container}>
            <div className={styles.header__left}>
              <div className='icon__container'>
                <img src='/assets/times.svg' className='icon' alt='' />
              </div>
              <p className={styles.header__title}>Club Info</p>
            </div>
          </div>
        </Wrapper>
        <Divider />
      </div>
      <div className={styles.main}>
        <div className='mb-2'>
          <Wrapper borderRadius='1rem' px='1.5rem' py='1rem'>
            <div>
              <p className={styles.heading}>Mentors - 5</p>
            </div>
            <EachGroup
              imageSize='30px'
              title='sometitle'
              titleStyles={{
                fontSize: '0.8rem',
                fontWeight: '400',
                marginBottom: '0rem',
              }}
            />
          </Wrapper>
        </div>
        <div className='mb-2'>
          <Wrapper borderRadius='1rem' px='1.5rem' py='1rem'>
            <div>
              <p className={styles.heading}>Moderators - 10</p>
            </div>
            <EachGroup
              imageSize='30px'
              title='sometitle'
              titleStyles={{
                fontSize: '0.8rem',
                fontWeight: '400',
                marginBottom: '0rem',
              }}
            />
          </Wrapper>
        </div>
        <div>
          <Wrapper borderRadius='1rem' px='1.5rem' py='1rem'>
            <div>
              <p className={styles.heading}>Members - 1453</p>
            </div>
            <EachGroup
              imageSize='30px'
              title='sometitle'
              titleStyles={{
                fontSize: '0.8rem',
                fontWeight: '400',
                marginBottom: '0rem',
              }}
            />
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
