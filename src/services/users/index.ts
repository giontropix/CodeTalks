import { BASE_URL } from '../../constants';
import { User } from '../../types';

export const getUsers = async (): Promise<User[]> =>
  fetch(`${BASE_URL}users`).then((res) => res.json());

export const addUser = async ({ name, email, framework }: User): Promise<void> => {
  fetch(`${BASE_URL}users`, {
    method: 'POST',
    body: JSON.stringify({ name: name.toUpperCase(), email, framework }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
