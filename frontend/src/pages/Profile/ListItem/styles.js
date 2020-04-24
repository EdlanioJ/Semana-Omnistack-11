import styled from 'styled-components';

export const Item = styled.li`
  background: ${props => props.theme.colors.li};;
	padding: 24px;
	border-radius: 8px;
  position: relative;
  box-shadow: 0 4px 8px 0 ${props => props.theme.colors.shadow};

  strong {
    display: block;
    margin-bottom: 16px;
    color:  ${props => props.theme.colors.strong};
  }

  p + strong {
    margin-top: 32px;
  }

  p {
    color: ${props => props.theme.colors.paragraph};;
    line-height: 21px;
    font-size: 16px;
  }
`;

export const Button  = styled.button`
	position: absolute;
	right: 24px;
	top: 24px;
  border: 0;
  background: transparent;
  
  :hover {
    opacity: 0.6;
  }
`;
