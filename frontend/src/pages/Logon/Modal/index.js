import React, { useState, useEffect, useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';

import { ThemeContext as Theme } from '../../../context/globalContext';
import { Container, Content, Header, Title, Main, Button, Backdrop, ButtonGroup, Text } from './styles';

export default function Modal() {
  const [ visible, setVisible] = useState(false);
  const toggleTheme = useContext(Theme);
  const { title } = useContext(ThemeContext);
  
  useEffect(() => {
    const defaultTheme = localStorage.getItem('defaultTheme');
    if(!defaultTheme) setVisible(true)
  }, []);

  const closeModal = () => {
    localStorage.setItem('defaultTheme', true);
    setVisible(false);
  }

  if(visible) {
    return (
      <Container>
        <Backdrop onClick={closeModal}/>
        <Content>
          <Header>
            <Title>Defina seu tema padrão</Title>

            <button onClick={closeModal}>&times;</button>
          </Header>
          <Main>
            <ButtonGroup>
              <Button 
                onClick={toggleTheme} 
                enabled={title==='dark'} 
                disabled={title==='light'}
              >
                <Text>Light</Text>
                <FiSun size={18}  />  
              </Button>
              <Button 
                onClick={toggleTheme} 
                enabled={title==='light'} 
                disabled={title==='dark'}
              >
                <Text>Dark</Text>
                <FiMoon size={18}  /> 
              </Button>
            </ButtonGroup>
          </Main>
        </Content>
      </Container>
    );
  }
  
  return null
}
