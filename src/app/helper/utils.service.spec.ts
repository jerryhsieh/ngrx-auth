import { TestBed, inject } from '@angular/core/testing';
import { JwtModule, JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { UtilsService } from './utils.service';

export function jwtOptionsFactory() {
    return {
        tokenGetter: () => {
            return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:3000']
    }
}

describe('UtilsService', () => {
    let service: UtilsService;
    let token = 'test_token';
    let value = 'test value';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                JwtModule.forRoot({
                    jwtOptionsProvider: {
                        provide: JWT_OPTIONS,
                        useFactory: jwtOptionsFactory
                    }
                })
            ],
            providers: [UtilsService]
        });
    });

    it('should be created', inject([UtilsService], (service: UtilsService) => {
        expect(service).toBeTruthy();
    }));

    it('should write token', inject([UtilsService], (service: UtilsService) => {

        //expect(service.writeToken(token, value)).
    }));
});
