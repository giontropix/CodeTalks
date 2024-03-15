import { useEffect } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import { EmptyState } from './components/EmptyState';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetUsers } from '../../store/slices/users/sideEffects';
import { selectUsers } from '../../store/slices/users/usersSlice';
import { AppDispatch } from '../../store/configureStore';
import { FormattedMessage } from 'react-intl';
import { NotFound } from './components/NotFound';

export const TableSort = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(requestGetUsers());
  }, []);

  if (!users.length) return <EmptyState />;

  const rows = users.map(({ id, name, email, framework }) => (
    <Table.Tr data-testid="table-body-row" key={id}>
      <Table.Td data-testid="table-cell-name">{name}</Table.Td>
      <Table.Td data-testid="table-cell-email">{email}</Table.Td>
      <Table.Td data-testid="table-cell-company">{framework}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea p="xl" data-testid="table-test">
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
        <Table.Tbody data-testid="table-body">
          <Table.Tr data-testid="table-row">
            <Table.Th>
              <FormattedMessage id="table.headers.name" />
            </Table.Th>
            <Table.Th>
              <FormattedMessage id="table.headers.email" />
            </Table.Th>
            <Table.Th>
              <FormattedMessage id="table.headers.framework" />
            </Table.Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 && rows}
          {rows.length === 0 && <NotFound />}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
};
