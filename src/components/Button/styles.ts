import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 6px;
  padding: 8px 8px;
  border: none;
  background: none;
  background-color: #272735;
  color: white;
  transition: 300ms;

  &:hover {
    background-color: #171725;
  }
`;

export const Text = styled.span`
margin: 0;
font-size: 24px;
text-align: center;
pointer-events: none;
`;
