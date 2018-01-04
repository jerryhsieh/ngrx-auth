import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';

import { UserEffects } from './users.effects';
import { UserService } from '../../users/service/user.service';
import { UtilsService } from '../../helper/utils.service';
import * as fromStore from '../../store';


// mocked up service
class UserServiceStub {
    getLoginStatus = jasmine.createSpy('getLoginStatus')
        .and.returnValue(Observable.of(true));

    logout = jasmine.createSpy('logout')
        .and.returnValue(true);

    loginToServer = jasmine.createSpy('loginToServer')
        .and.returnValue(Observable.of({ success: true, payload: '1234' }));

    getUserFromServer = jasmine.createSpy('getUserFromServer')
        .and.returnValue(Observable.of('Jerry'));
}

class UtilServiceStub {
    writeToken = jasmine.createSpy('writeToken')
        .and.returnValue(true);

    removeToken = jasmine.createSpy('removeToken')
        .and.returnValue(true);
}

// start describe
describe('Users.Effects', () => {
    let effects: UserEffects;
    let actions: Observable<any>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                UserEffects,
                provideMockActions(() => actions),
                { provide: UserService, useClass: UserServiceStub },
                { provide: UtilsService, useClass: UtilServiceStub },
            ]
        });
        effects = TestBed.get(UserEffects);
    })

    it('should work', () => {
        const action = new fromStore.getUserAction();
        const action_success = new fromStore.getUserSuccessAction('Jerry');
        // Refer to 'Writing Marble Tests' for details on '--a-' syntax
        actions = hot('--a-', { a: action });
        const expected = cold('--b', { b: action_success });

        expect(effects.getUserEffect$).toBeObservable(expected);

    })
});
