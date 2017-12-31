import { TestBed, inject } from '@angular/core/testing';

import { StartupService } from './startup.service';
import { UserService } from '../users/service/user.service';
import { Observable } from 'rxjs/Observable';

import { UtilsService } from '../helper/utils.service';


describe('StartupService', () => {
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

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StartupService,
                { provide: UserService, useClass: UserServiceStub },
                { provide: UtilsService, useClass: UtilsServiceStub }
            ]
        });
    });

    it('should be created', inject([StartupService], (service: StartupService) => {
        expect(service).toBeTruthy();
    }));
});
