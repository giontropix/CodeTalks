import { useEffect, useState } from 'react';
import { Table, ScrollArea, Text, TextInput, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { RowData } from './types';
import { sortData } from './utils';
import Th from './components/Th';

export function TableSort() {
  const [search, setSearch] = useState('');
  const [fetchData, setFetchData] = useState<RowData[]>([]);
  const [sortedData, setSortedData] = useState(fetchData);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const getData = async () => {
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data);
        setSortedData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (!fetchData.length) return null;

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(fetchData, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(fetchData, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const rows = sortedData.map((row) => (
    <Table.Tr data-testid="table-body-row" key={row.name}>
      <Table.Td data-testid="table-cell-name">{row.name}</Table.Td>
      <Table.Td data-testid="table-cell-email">{row.email}</Table.Td>
      <Table.Td data-testid="table-cell-company">{row.company}</Table.Td>
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
              Name
            </Th>
            <Th
              dataTestId="table-header-email"
              sorted={sortBy === 'email'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('email')}
            >
              Email
            </Th>
            <Th
              dataTestId="table-header-company"
              sorted={sortBy === 'company'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('company')}
            >
              Company
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td data-testid="table-cell" colSpan={Object.keys(fetchData[0]).length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
