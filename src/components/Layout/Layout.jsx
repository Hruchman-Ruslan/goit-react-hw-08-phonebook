import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components';
import { AppBar } from 'components/AppBar/AppBar';
import { Notification } from 'components/Notification/Notification';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
        <Notification />
      </Suspense>
    </Container>
  );
};
