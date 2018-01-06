//
//
// File name : users.effects.ts
// Created by: Jerry Hsieh @ 2018-01-02
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';
import { filter } from 'rxjs/operators/filter';
import { catchError } from 'rxjs/operators/catchError';

import * as actions from '../actions';
import { UserService } from '../../users/service/user.service';
import { UtilsService, TOKEN } from '../../helper/utils.service';
import { User, Response } from '../../models';

@Injectable()
export class UserEffects {
    constructor(
        private action$: Actions,
        private userService: UserService,
        private utils: UtilsService
    ) { }


    @Effect()
    loginEffect$: Observable<Action> = this.action$.ofType(actions.LOGIN).pipe(
        map((action: actions.LoginAction) => action.payload),
        switchMap((user: User) => {
            return this.userService.loginToServer(user).pipe(
                map((res: Response) => {
                    if (res.success) {
                        if (user.rememberMe) {
                            this.utils.writeToken(TOKEN, res.payload);
                        }
                        return new actions.LoginSuccessAction(user.username);
                    } else {
                        return new actions.LoginFailAction(res.payload);
                    }

                }),
                catchError((err) => of(new actions.LoginFailAction(err))),
            )
        }),
    );


    @Effect()
    getUserEffect$: Observable<Action> = this.action$.ofType(actions.GETUSER)
        .switchMap(() => {
            return this.userService.getUserFromServer().pipe(
                filter(user => (user !== null)),
                map(user => new actions.getUserSuccessAction(user)),
                catchError(err => of(new actions.getUserFailAction(err))),
            )
        })

    @Effect()
    logoutEffect$: Observable<Action> = this.action$.ofType(actions.LOGOUT)
        .switchMap(() => {
            this.utils.removeToken(TOKEN);
            return of(new actions.LogoutSuccessAction());
        })

}
