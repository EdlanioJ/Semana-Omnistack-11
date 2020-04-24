import React, {useContext} from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Button from '../../components/Button';
import Link from '../../components/Link';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import { Container, Content, Section, Title, Text, Form } from './styles';

import { GlobalContext } from '../../context/globalContext';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const {handleNewIncident} = useContext(GlobalContext)

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The hero" />

          <Title>Cadastrar novo caso</Title>
          <Text>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</Text>

          <Link to='/profile'>
						<FiArrowLeft size={16} color='#E02041' />
						Voltar para home
					</Link>
        </Section>
        <Form onSubmit={handleNewIncident}>
          <Input
            placeholder="Titulo do caso"
            name="title"
          />
          <TextArea
            placeholder="Descrição"
            name="description"
          />
          <Input
            placeholder="Valor em kwanzas"
            name="value"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}