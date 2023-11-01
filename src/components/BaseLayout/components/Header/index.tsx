import { ActionIcon, AppShell, Flex, Title, Text, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { FormattedMessage } from 'react-intl';

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell.Header data-testid="header" px="sm">
      <Flex justify="space-between" align="center" h="100%">
        <Title data-testid=" header-title">
          <FormattedMessage id="header.title" />
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'green', to: 'violet' }}
          >
            <FormattedMessage id="header.cypress" />
          </Text>
        </Title>
        <ActionIcon
          data-testid="header-color-scheme-toggle"
          variant="default"
          onClick={() => toggleColorScheme()}
          size={30}
        >
          {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
        </ActionIcon>
      </Flex>
    </AppShell.Header>
  );
};

export default Header;
