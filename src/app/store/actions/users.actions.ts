import { Action } from '@ngrx/store';

// define Actions type
export const LOGIN = '[users] LOGIN';
export const LOGOUT = '[users] LOGOUT';
export const GETUSER = '[users] GETUSER';
export const GETUSER_SUCCESS = '[users] GETUSER_SUCCESS';
export const GETUSER_FAIL = '[users] GETUSER_FAIL';

// define Actions classes
export class LoginAction implements Action {
    readonly type = LOGIN;
}

export class LogoutAction implements Action {
    readonly type = LOGOUT;
}

export class getUserAction implements Action {
    readonly type = GETUSER;
}

export class getUserSuccessAction implements Action {
    readonly type = GETUSER_SUCCESS;

    constructor(public payload: string) { }         // username
}

export class getUserFailAction implements Action {
    readonly type = GETUSER_FAIL;

    constructor(public payload: any) { }
}

export type UserActions
    = LoginAction
    | LogoutAction
    | getUserAction
    | getUserSuccessAction
    | getUserFailAction;


