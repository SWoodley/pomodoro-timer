import styled from 'styled-components';

  export const Button = styled.button`
  display: inline-block;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: rgba(0,0,0,0);
  border: 2px solid #fff;
  border-radius: 500px;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  font-family: "Space Grotesk",sans-serif;
  font-weight: bold;
  line-height: 1.25;
  padding: .625rem 1.25rem;
  margin: .625rem 1.25rem;
  font-size: 1.25rem;
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
    &:hover {
      color: black;
      background-color: white;
    }
  `
