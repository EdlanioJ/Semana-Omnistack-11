import React from 'react';

import { Btn } from './styles';

export default function Button({ children, ...rest }) {
  return (
    <Btn {...rest}>{children}</Btn>
  );
}
