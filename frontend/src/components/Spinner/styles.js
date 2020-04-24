import styled, {keyframes} from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Container = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid ${props => props.theme.colors.spinner};
  border-left-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 20% auto;
`;
