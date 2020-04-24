import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
	max-width: 1180px;
	padding: 0 30px;
  margin: 32px auto;
`;

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
	color: ${props => props.theme.colors.header};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  
  img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-left: auto;

    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
  }

  button {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.border};
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;
  }

  button:hover {
    border-color: #999;
  }
`;

export const Span = styled.span`
  font-size: 20px;
  margin-left: 24px;
	color: ${props => props.theme.colors.header};
`;


export const List = styled.ul`
  display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 24px;
	list-style: none;
`;
