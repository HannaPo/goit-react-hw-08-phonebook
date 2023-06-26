import { NavigationLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
       <NavigationLink to="/login">
        Log In
      </NavigationLink>
      <NavigationLink to="/register">
        Register
      </NavigationLink>
    </div>
  );
};
