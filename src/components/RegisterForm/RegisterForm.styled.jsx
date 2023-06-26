import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 1rem;
  max-width: 460px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 800px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 5px;
  max-width: 270px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 2px;
`;
