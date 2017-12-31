import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { UserService } from '../users/service/user.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
    class UserServiceStub {
        getLoginStatus = jasmine.createSpy('getLoginStatus')
            .and.returnValue(Observable.of(true));

        logout = jasmine.createSpy('logout')
            .and.returnValue(true);
    }

    class RouterStub {
        navigateByUrl(url: string) { return url; }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuard,
                { provide: UserService, useClass: UserServiceStub },
                { provide: Router, useClass: RouterStub }
            ]
        });
    });

    it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
        expect(guard).toBeTruthy();
    }));
});
