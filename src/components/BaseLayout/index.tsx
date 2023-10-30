import { AppShell } from '@mantine/core';
import Header from './Header';
import Sidebar from './Sidebar';

const BaseLayout = () => (
  <AppShell
    header={{ offset: true, height: { base: 50, md: 70 } }}
    navbar={{
      width: 280,
      breakpoint: 'sm',
    }}
  >
    <Header />
    <Sidebar />
  </AppShell>
);

export default BaseLayout;
