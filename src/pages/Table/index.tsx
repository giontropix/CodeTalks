import { useEffect, useState } from 'react';
import { Table, ScrollArea, TextInput, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { sortData } from './utils';
import Th from './components/Th';
import { EmptyState } from './components/EmptyState';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetUsers } from '../../store/slices/users/sideEffects';
import { selectUsers } from '../../store/slices/users/usersSlice';
import { User } from '../../types';
import { AppDispatch } from '../../store/configureStore';
import { FormattedMessage } from 'react-intl';
import { NotFound } from './components/NotFound';

export const TableSort = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState<User[]>([]);
  const [sortBy, setSortBy] = useState<keyof User | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  useEffect(() => {
    dispatch(requestGetUsers())
      .unwrap()
      .then((data) => setSortedData(data));
  }, []);

  if (!users.length) return <EmptyState />;

  const setSorting = (field: keyof User) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(users, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(users, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const rows = sortedData.map(({ id, name, email, framework }) => (
    <Table.Tr data-testid="table-body-row" key={id}>
      <Table.Td data-testid="table-cell-name">{name}</Table.Td>
      <Table.Td data-testid="table-cell-email">{email}</Table.Td>
      <Table.Td data-testid="table-cell-framework">{framework}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea p="xl" data-testid="table-test">
      <TextInput
        data-testid="table-search"
        placeholder="Search by any field"
        mb="md"
        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
        <Table.Tbody data-testid="table-body">
          <Table.Tr data-testid="table-row">
            <Th
              dataTestId="table-header-name"
              sorted={sortBy === 'name'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('name')}
            >
              <FormattedMessage id="table.headers.name" />
            </Th>
            <Th
              dataTestId="table-header-email"
              sorted={sortBy === 'email'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('email')}
            >
              <FormattedMessage id="table.headers.email" />
            </Th>
            <Th
              dataTestId="table-header-framework"
              sorted={sortBy === 'framework'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('framework')}
            >
              <FormattedMessage id="table.headers.framework" />
            </Th>
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
