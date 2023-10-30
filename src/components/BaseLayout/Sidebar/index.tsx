import { AppShell } from '@mantine/core';
import { IconAlignJustified, IconHome } from '@tabler/icons-react';
import { MenuItem } from '../../types';
import Item from './components';

const Sidebar = () => {
  const menuItems: MenuItem[] = [
    {
      Icon: IconHome,
      path: '/',
      translationId: 'sidebar.menu_item.dashboard',
    },
    {
      Icon: IconAlignJustified,
      path: '/form',
      translationId: 'sidebar.menu_item.form',
    },
  ];

  return (
    <AppShell.Navbar>
      {menuItems.map(({ Icon, path, translationId }) => (
        <Item Icon={Icon} path={path} translationId={translationId} />
      ))}
    </AppShell.Navbar>
  );
};

export default Sidebar;
