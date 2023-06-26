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

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const ContactsTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
