import React, { useContext, memo } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { GlobalContext } from '../../../context/globalContext';

import { Item, Button } from './styles';

const ListItem = ({ item }) => {
  const { handleDeleteIncident } = useContext(GlobalContext);

  return (
    <Item>
      <strong>CASO:</strong>
      <p>{item.title}</p>

      <strong>DESCRIÃO:</strong>
      <p>{item.description}</p>

      <strong>VALOR:</strong>
      <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'AKZ'}).format(item.value)}</p>

      <Button type="button" onClick={() => handleDeleteIncident(item.id)}>
        <FiTrash2 size={20} color="#a8a8b3"/>
      </Button>
    </Item>
  );
}

export default memo(ListItem);
