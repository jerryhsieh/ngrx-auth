import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';


import * as users from '../actions/users.actions';
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
    loginEffect$: Observable<Action> = this.action$.ofType(users.LOGIN)
        .map((action: users.LoginAction) => action.payload)
        .switchMap((user: User) => {
            return this.userService.loginToServer(user)
                .map((res: Response) => {
                    if (res.success) {
                        if (user.rememberMe) {
                            this.utils.writeToken(TOKEN, res.payload);
                        }
                        return new users.LoginSuccessAction(user.username);
                    } else {
                        return new users.LoginFailAction(res.payload);
                    }

                })
                .catch((err) => of(new users.LoginFailAction(err)));
        })

    @Effect()
    getUserEffect$: Observable<Action> = this.action$.ofType(users.GETUSER)
        .switchMap(() => {
            return this.userService.getUserFromServer()
                .filter(user => (user !== null))
                .do(user => console.log('got user in effects', user))
                .map(user => new users.getUserSuccessAction(user))
                .catch(err => of(new users.getUserFailAction(err)));
        })

}
