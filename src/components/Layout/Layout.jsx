import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, AppBar, Notification } from 'components';

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
