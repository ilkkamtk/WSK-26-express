import app from '../src/app';
import {registerUser} from './testUser';
// randomstring kirjasto, tee AI:llä

let token = '';
const random = randomstring(7);

describe('User related tests', () => {
  const user = {
    username: 'Cyrö' + random,
    name: 'Juha',
    email: `juha.${random}@metropolia.fi`,
    role: 'teacher / failed comedian',
    password: 'tähän oman pankin salasana',
  };
  it('registers a new user', async () => {
    await registerUser(app, '/api/v1/users', user);
  });
});
