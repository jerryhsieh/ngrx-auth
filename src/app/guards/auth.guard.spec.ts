//
//
// File name : auth.guard.spec.ts 
// Created by: Jerry Hsieh @ 2018-01-11
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


// start describe
describe('AuthGuard', () => {
    let mockSnapshot = jasmine.createSpyObj("RouterStateSnapshot", ['toString']);
    let storeSpy = jasmine.createSpyObj('storeSpy', ['dispatch', 'subscribe', 'select']);
    let router = { navigate: jasmine.createSpy("navigate") };
    let guard: AuthGuard;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            providers: [
                AuthGuard,
                { provide: Store, useValue: storeSpy },
                { provide: RouterStateSnapshot, useValue: mockSnapshot },
                { provide: Router, useValue: router }
            ]
        });

        let store = TestBed.get(Store);
        store.select = () => of(false);       // for constructor
        guard = TestBed.get(AuthGuard);
    });

    it('should create auth guard', () => {
        expect(guard).toBeTruthy();
    });

    it('should navigate to user/login if not login ', () => {
        let store = TestBed.get(Store);
        store.select = () => of(false);

        let test = guard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);
        expect(test).toEqual(false);
        //expect(router.navigate).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalled();            // navigate to /users/login
    })

});

