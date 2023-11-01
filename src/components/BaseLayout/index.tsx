import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const BaseLayout = () => (
  <AppShell
    header={{ offset: true, height: { base: 50, md: 80 } }}
    navbar={{
      width: 280,
      breakpoint: 'sm',
    }}
  >
    <Header />
    <Sidebar />
    <AppShell.Main>
      <Outlet />
    </AppShell.Main>
  </AppShell>
);

export default BaseLayout;
