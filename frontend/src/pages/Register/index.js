import React, {useContext} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { GlobalContext } from '../../context/globalContext';

import Button from '../../components/Button';
import Link from '../../components/Link';
import Input from '../../components/Input';
import {Container, Content, Section, Title, Text, Form, InputGroup} from './styles';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const {handleRegister} = useContext(GlobalContext);

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The hero" />

          <Title>Cadastro</Title>
          <Text>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</Text>

          <Link to='/' >
						<FiArrowLeft size={16} color='E02041' />
						Já tenho cadastro
					</Link>
        </Section>
        <Form onSubmit={handleRegister}>
          <Input 
            placeholder="Nome da ONG" 
            name="name"
          />
          <Input 
            type="email" 
            placeholder="E-mail" 
            name="email"
          />
          <Input 
            type="tel"
            placeholder="Whatsapp"
            name="whatsapp"
          />

          <InputGroup>
            <Input 
              placeholder="Cidade"
              name="city"
            />
            <Input 
              placeholder="UF" 
              style={{ width: 80 }}
              name="uf"
            />

          </InputGroup>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}