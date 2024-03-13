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
      dataTestId: 'sidebar-menu-item-dashboard',
    },
    {
      Icon: IconTable,
      path: '/table',
      translationId: 'sidebar.menu_item.table',
      dataTestId: 'sidebar-menu-item-table',
    },
    {
      Icon: IconAlignJustified,
      path: '/form',
      translationId: 'sidebar.menu_item.form',
      dataTestId: 'sidebar-menu-item-form',
    },
  ];

  return (
    <AppShell.Navbar>
      {menuItems.map(({ Icon, path, translationId, dataTestId }) => (
        <Item
          dataTestId={dataTestId}
          key={path}
          Icon={Icon}
          path={path}
          translationId={translationId}
        />
      ))}
    </AppShell.Navbar>
  );
};

export default Sidebar;
