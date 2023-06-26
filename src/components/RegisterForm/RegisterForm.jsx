import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Container, Form, Label, Input } from './RegisterForm.styled';
import { Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
<Form onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button variant="outlined" size="small"  type="submit">Register</Button>
    </Form>
    </Container>
    
  );
};