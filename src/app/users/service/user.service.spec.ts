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

    });

    afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
        backend.verify();
    }));

    it('should be created', inject([UserService], (service: UserService) => {
        expect(service).toBeTruthy();
    }));


    it(`should send an expected login request`, async(inject([UserService, HttpTestingController],
        (service: UserService, backend: HttpTestingController) => {
            service.login({ username: 'Jerry', password: 'jerry' }).subscribe();

            backend.expectOne((req: HttpRequest<any>) => {
                const body = new HttpParams({ fromString: req.body });

                return req.url === 'http://localhost:3000/api/users/authenticate'
                    && req.method === 'POST'
                    && req.headers.get('Content-Type') === 'application/x-www-form-urlencoded'
                    && body.get('username') === 'Jerry'
                    && body.get('password') === 'jerry';
            }, `POST to 'api/users/authenticate' with form-encoded username and password`);
        })));

});
