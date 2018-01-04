import { TestBed, inject } from '@angular/core/testing';

import { StartupService } from './startup.service';
import { UserService } from '../users/service/user.service';
import { Observable } from 'rxjs/Observable';
import { UtilsService } from '../helper/utils.service';
import { Store } from '@ngrx/store';

// mocked up sevices
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

class UtilsServiceStub {
    isTokenExpired = jasmine.createSpy('isTokenExpired')
        .and.returnValue(false);
}

describe('StartupService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StartupService,
                { provide: UserService, useClass: UserServiceStub },
                { provide: UtilsService, useClass: UtilsServiceStub },
                { provide: Store, useClass: MockStore }
            ]
        });
    });

    it('should be created', inject([StartupService], (service: StartupService) => {
        expect(service).toBeTruthy();
    }));
});
