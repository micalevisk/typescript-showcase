import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 768px;
  padding: 16px;
  background-color: #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
`;

export const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
