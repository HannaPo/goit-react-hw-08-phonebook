import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import {  Container, Title } from './App.styled';

export default function Login() {
  return (
    <Container>
      <Helmet>
        <Title>Login</Title>
      </Helmet>
      <LoginForm />
    </Container>
  );
}