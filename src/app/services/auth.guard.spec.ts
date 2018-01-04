import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { UserService } from '../users/service/user.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

// mocked up services
class MockStore {
    public dispatch(obj) {
        console.log('dispatching from the mock store!')
    }
    public select(obj) {
        console.log('selecting from the mock store!');
        return Observable.of(true)
    }
}
class UserServiceStub {
    getLoginStatus = jasmine.createSpy('getLoginStatus')
        .and.returnValue(Observable.of(true));

    logout = jasmine.createSpy('logout')
        .and.returnValue(true);
}

class RouterStub {
    navigateByUrl(url: string) { return url; }
}

// start describe
describe('AuthGuard', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuard,
                { provide: UserService, useClass: UserServiceStub },
                { provide: Router, useClass: RouterStub },
                { provide: Store, useClass: MockStore }
            ]
        });
    });

    it('should create auth guard', inject([AuthGuard], (guard: AuthGuard) => {
        expect(guard).toBeTruthy();
    }));
});
