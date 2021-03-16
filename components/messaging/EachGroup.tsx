import React from 'react';
import styles from './LeftSideBar.module.scss';
import Avatar from './Avatar';
import Wrapper from './Wrapper';

interface EachGroupProps {
  title: string;
  description?: string;
  image?: string;
  imageSize?: string;
  titleStyles?: object;
}
const defaultProps = {
  imageSize: '45px',
};

const EachGroup: React.FC<EachGroupProps> = ({
  title,
  description,
  image,
  imageSize,
  titleStyles,
}: EachGroupProps) => {
  return (
    <Wrapper px='1rem' py='0.75rem' my='.75rem'>
      <div className={styles.eachGroup__container}>
        <div className={styles.avatar__container}>
          <Avatar src={image} size={imageSize} />
        </div>
        <div className={styles.eachGroup__content}>
          <p className={styles.eachGroup__title} style={titleStyles}>
            {title}
          </p>
          {description && (
            <p className={styles.eachGroup__description}>{description}</p>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

EachGroup.defaultProps = defaultProps;
export default EachGroup;
