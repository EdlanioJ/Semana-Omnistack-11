import styled from 'styled-components';

export const TextAreaForm = styled.textarea`
  width: 100%;
	min-height: 140px;
	resize: vertical;
	color: ${props => props.theme.colors.text};;
	border: 1px solid ${props => props.theme.colors.border};
	border-radius: 8px;
	padding: 16px 24px;
	line-height: 24px;
	background-color: ${props => props.theme.colors.input};
`;
