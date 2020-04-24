import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.backdrop};
  z-index: 6;
  position: fixed;
`;

export const Content = styled.div`
  position: relative;
  margin: auto;
  width: 300px;
  min-height: 300px;
  background-color: ${props => props.theme.colors.background};
  top: 25%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  z-index: 7;
`;

export const Header = styled.header`
  background-color: ${props => props.theme.colors.primary};
  padding: 15px;
  height: 100px;


  button {
    top: 15px;
    right: 15px;
    position: absolute;
    font-size: 18px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    border: 0;

    :hover {
      filter: brightness(90%);
    }

  }
`;

export const Title = styled.h1`
  font-size: 32px;
	margin-bottom: 32px;
  color: #fff;
  font-size: 30px;
`;

export const Main  = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 25% 0;
`;

export const Button = styled.button`
	flex: 1;
  color: #fff;
  border: 0;
	font-weight: 700;
  align-items: center;
  justify-content: center;
	font-size: 18px;
  transition: filter 0.2s;
  box-sizing: border-box;
  
  box-shadow: 0 4px 8px 0 ${props => props.theme.colors.shadow};
  :disabled {
    background-color: ${props => props.theme.colors.disabled};
    cursor: auto;
  };

  :enabled {
	  background-color: ${props => props.theme.colors.primary};
  };

  :first-of-type{
    border-radius: 8px 0 0 8px;
  }

  :last-of-type{
    border-radius: 0 8px 8px 0;
  }
`;
export const Text = styled.span`
  margin-right: 6px;
`;
export const ButtonGroup = styled.div`
  height: 48px;
  width: 220px;
  display: flex;
	border-radius: 8px;
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
`;