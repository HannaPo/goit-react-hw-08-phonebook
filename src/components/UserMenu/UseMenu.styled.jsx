import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button`
  min-width: 85px;
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;

  &:hover {
    background-color: #3291f7;
  }
`;