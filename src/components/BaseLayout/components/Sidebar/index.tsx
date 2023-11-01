import { AppShell } from '@mantine/core';
import { IconAlignJustified, IconHome, IconTable } from '@tabler/icons-react';
import { MenuItem } from '../../../types';
import Item from './components';

const Sidebar = () => {
  const menuItems: MenuItem[] = [
    {
      Icon: IconHome,
      path: '/dashboard',
      translationId: 'sidebar.menu_item.dashboard',
    },
    {
      Icon: IconAlignJustified,
      path: '/form',
      translationId: 'sidebar.menu_item.form',
    },
    {
      Icon: IconTable,
      path: '/table',
      translationId: 'sidebar.menu_item.table',
    },
  ];

  return (
    <AppShell.Navbar>
      {menuItems.map(({ Icon, path, translationId }) => (
        <Item key={path} Icon={Icon} path={path} translationId={translationId} />
      ))}
    </AppShell.Navbar>
  );
};

export default Sidebar;
