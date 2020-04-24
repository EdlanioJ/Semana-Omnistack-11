import React,{ useEffect, useContext } from 'react';
import { FiPower, FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';

import Button from '../../components/Button';
import Link from '../../components/Link';
import ListItem from './ListItem';
import { Container, Header, Title, Span, List } from './styles';

import { GlobalContext, ThemeContext as Theme } from '../../context/globalContext';

import logoImg from '../../assets/logo.svg';

export default function Profile() {

  const  { incidents, handleLogout, listIncidents } = useContext(GlobalContext);
  const toggleTheme = useContext(Theme);
  const {title} = useContext(ThemeContext);

  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    listIncidents();
    console.log('eu me amo')
    
  }, [listIncidents]);

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <Span>Bem vinda, {ongName}</Span>

        <Link to="/incidents/new">Cadastrar novo caso</Link>
        <Button type="button" onClick={toggleTheme}>
          {title==='light' ? 
            (<FiMoon size={18} color="#e02041" />) : 
            (<FiSun size={18} color="#e02041" />)
          }
        </Button>
        <Button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041"/>
        </Button>
      </Header>
      <Title>Casos cadastrados</Title>

      <List>
        {incidents.map(incident => (
          <ListItem key={incident.id} item={incident} />
        ))}
      </List>
    </Container>
  );
}