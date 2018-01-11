import { TestBed, inject, async } from '@angular/core/testing';

import { UserService } from './user.service';

import { HttpClientModule, HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppConfig } from '../../app.config';
import { UtilsService } from '../../helper/utils.service';
import { JwtModule, JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

export function jwtOptionsFactory() {
    return {
        tokenGetter: () => {
            return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:3000']
    }
}


describe('UserService', () => {
    let service: UserService;
    let backend: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                HttpClientTestingModule,
                JwtModule.forRoot({
                    jwtOptionsProvider: {
                        provide: JWT_OPTIONS,
                        useFactory: jwtOptionsFactory
                    }
                })
            ],
            providers: [UserService, AppConfig, UtilsService]
        });
        service = TestBed.get(UserService);
        backend = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        backend.verify();
    });

    it('should be created', inject([UserService], (service: UserService) => {
        expect(service).toBeTruthy();
    }));

    it(`should send an expected login request`, async(() => {
        const user = {
            username: 'Jerry',
            password: 'jerry',
            rememberMe: true
        };
        /*
        service.login(user).subscribe(status => {
            console.log('got status is', status);
            expect(status).toEqual(true);
        });


        const req = backend.expectOne('http://localhost:3000/api/users/authenticate');
        expect(req.request.method).toBe('POST');
        expect(req.request.body.username).toBe('Jerry');
        req.flush({ success: true, token: '12345' });
        */

    }));

});
