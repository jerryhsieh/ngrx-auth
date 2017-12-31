import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
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

    it('should be created', inject([UserService], (service: UserService) => {
        expect(service).toBeTruthy();
    }));
});
