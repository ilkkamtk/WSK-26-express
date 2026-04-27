import app from '../src/app';
import {registerUser} from './testUser';

describe('User related tests', () => {
  it('registers a new user', async () => {
    const user = {
      username: 'Cyrö',
      name: 'Juha',
      email: 'juha.tauriainen@metropolia.fi',
      role: 'teacher / failed comedian',
      password: 'tähän oman pankin salasana',
    };
    await registerUser(app, '/api/v1/users', user);
  });
});
