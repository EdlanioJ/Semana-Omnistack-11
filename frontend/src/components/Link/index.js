import React from 'react';

import { RouterLink } from './styles';

export default function Link({ children, ...rest }) {
  return (
    <RouterLink {...rest}>{children}</RouterLink>
  );
}
