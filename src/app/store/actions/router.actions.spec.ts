import * as actions from './router.actions';

describe('Router.Actions', () => {
    it('should create an instance', () => {
        expect(new actions.Go()).toBeTruthy();
    });
});
