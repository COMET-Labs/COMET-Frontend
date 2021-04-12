import React from 'react';

interface DividerProps {
  my?: string;
  width?: string;
}

const defaultProps = { my: '0.5rem', width: '100%' };

const Divider: React.FC<DividerProps> = ({ my, width }) => {
  let styles: any = {};
  if (my) {
    styles = { marginTop: my, marginBottom: my };
  }
  if (width) {
    styles.width = width;
  }

  return <div className='divider' style={styles}></div>;
};

Divider.defaultProps = defaultProps;

export default Divider;
