import React from 'react';

interface AvatarProps {
  src?: string;
  size?: string;
}

const defaultProps = {
  src: 'https://www.w3schools.com/howto/img_avatar.png',
  size: '50px',
};

const Avatar: React.FC<AvatarProps> = ({ src, size }) => {
  const styles: any = {};

  if (size) {
    styles.width = size;
    styles.height = size;
  }
  return <img src={src} alt='avatar' style={styles} className='avatar' />;
};

Avatar.defaultProps = defaultProps;

export default Avatar;
