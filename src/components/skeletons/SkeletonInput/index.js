import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonInput = (props) => {
  const {
    width = 300,
    speed = 1,
    height = 50,
    backgroundColor = '#f3f3f3',
    foregroundColor = '#ecebeb',
    borderRadius = 4,
    ...other
  } = props;
  return (
    <ContentLoader
      speed={speed}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      {...other}
    >
      <rect x="0" y="0" rx={borderRadius} ry={borderRadius} width="100%" height="100%" />
    </ContentLoader>
  );
};

export default SkeletonInput;
