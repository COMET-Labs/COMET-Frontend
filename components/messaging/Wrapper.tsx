import React from 'react';

interface WrapperProps {
  py?: string;
  px?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  my?: string;
  mx?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  borderRadius?: string;
}

const defaultProps = {};

const Wrapper: React.FC<WrapperProps> = ({
  children,
  py,
  px,
  pl,
  pr,
  pt,
  pb,
  my,
  mx,
  ml,
  mr,
  mt,
  mb,
  borderRadius,
}) => {
  const styles: any = { height: 'inherit' };
  if (py) {
    styles.paddingTop = py;
    styles.paddingBottom = py;
  }
  if (px) {
    styles.paddingLeft = px;
    styles.paddingRight = px;
  }
  if (pl) {
    styles.paddingLeft = pl;
  }
  if (pr) {
    styles.paddingRight = pr;
  }
  if (pt) {
    styles.paddingTop = py;
  }
  if (pb) {
    styles.paddingBottom = py;
  }
  if (my) {
    styles.marginTop = my;
    styles.marginBottom = my;
  }
  if (mx) {
    styles.marginLeft = mx;
    styles.marginRight = mx;
  }
  if (ml) {
    styles.marginLeft = ml;
  }
  if (mr) {
    styles.marginRigh = mr;
  }
  if (mt) {
    styles.marginTop = my;
  }
  if (mb) {
    styles.marginBottom = my;
  }
  if (borderRadius) {
    styles.borderRadius = borderRadius;
  }
  return (
    <div className='wrapper' style={styles}>
      {children}
    </div>
  );
};

Wrapper.defaultProps = defaultProps;

export default Wrapper;
