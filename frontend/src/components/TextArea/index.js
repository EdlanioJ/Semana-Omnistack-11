import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { TextAreaForm } from './styles';

export default function TextArea({ name, ...rest }) {
  const inputRef = useRef(null);
  const {fieldName, registerField} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [registerField, fieldName]);

  return (
    <TextAreaForm ref={inputRef} {...rest} />
  );
}