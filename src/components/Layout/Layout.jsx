import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components';
import { AppBar } from 'components/AppBar/AppBar';

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
