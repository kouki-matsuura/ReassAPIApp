import React, { ReactNode } from 'react';

type TitleProps = {
  color: string;
  children: ReactNode;
};
const Title: React.FC<TitleProps> = ({ color, children }) => {
  return <h1 color={color}>{children}</h1>;
};

export default Title;
