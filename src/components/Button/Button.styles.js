import styled from 'styled-components';

const theme = {
    blue: {
      default: '#3f51b5',
      hover: '#283593'
    },
    pink: {
      default: 'pink',
      hover: 'purple'
    }
  }
  
  //${props => theme[props.theme].default}
  //${props => theme[props.theme].hover};
  export const Button = styled.button`
    background-color: ${props => theme[props.theme].default}; 
    color: white;
    padding 5px 15px;
    border-radius: 5px;
    outline: 0;
    box-shadow: 0px 2px 2px lightgray;
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
      ${props => theme[props.theme].hover};
    }
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
  `
  
  Button.defaultProps = {
    theme: 'blue'
  }
