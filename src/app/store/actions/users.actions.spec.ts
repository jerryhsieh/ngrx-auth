import { LoginAction } from './users.actions';

import { User } from '../../models';

describe('LoginAction', () => {
    it('should create an instance', () => {
        let user: User = {
            username: 'abc'
        }
        expect(new LoginAction(user)).toBeTruthy();
    });
});
