import { Suspense } from 'react';
import { Container } from './Container/Container.styled';
import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
