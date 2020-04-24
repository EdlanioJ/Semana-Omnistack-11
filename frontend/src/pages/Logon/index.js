import React, {useContext} from 'react';
import { FiLogIn } from 'react-icons/fi';

import {Container,Form, Section, Title} from './styles';
import Link from '../../components/Link';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import Modal from './Modal';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import { GlobalContext } from '../../context/globalContext';

export default function Logon() {
	const { handleLogin, loading } = useContext(GlobalContext);
	
	return loading ? (<Spinner/>) : (
		<Container>
			<Section>
				<img src={logoImg} alt='Be The Hero' />

				<Form onSubmit={handleLogin}>
					<Title>Faça seu logon</Title>

					<Input name="id" placeholder="Digite seu ID"	/>
					<Button type='submit'>
						Entrar
					</Button>

					<Link to='/register'>
						<FiLogIn size={16} color='#E02041' />
						Não tenho cadastro
					</Link>
				</Form>
			</Section>

			<img src={heroesImg} alt='heroes' />
			<Modal/>
		</Container>
	);
}
