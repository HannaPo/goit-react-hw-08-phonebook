import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { toast } from 'react-hot-toast';
import { Form, Label, Input} from './LoginForm.styled';
import { Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.name}!`);
      })
      .catch(() => {
       toast.error('Incorrect login or password');
      });
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button variant="outlined" size="small" type="submit">Log In</Button>
    </Form>
  );
};
