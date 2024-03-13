import { Table, Text } from '@mantine/core';
import { FormattedMessage } from 'react-intl';

export const NotFound = () => (
  <Table.Tr>
    <Table.Td data-testid="table-cell">
      <Text fw={500} ta="center">
        <FormattedMessage id="table.no-data" />
      </Text>
    </Table.Td>
  </Table.Tr>
);
