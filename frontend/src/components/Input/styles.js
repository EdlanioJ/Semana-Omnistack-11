import styled from 'styled-components';

export const InputForm = styled.input`
  width: 100%;
	height: 60px;
	color: ${props => props.theme.colors.text};;
	border: 1px solid ${props => props.theme.colors.border};
	border-radius: 8px;
  padding: 0 24px;
	background-color: ${props => props.theme.colors.input};
`;
