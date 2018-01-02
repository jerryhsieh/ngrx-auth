//
//
// File name : users.actions.ts
// Created by: Jerry Hsieh @ 2018-01-02
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//
import { Action } from '@ngrx/store';
import { User } from '../../models';

// define Actions type
export const LOGIN = '[users] LOGIN';
export const LOGIN_SUCCESS = '[users]  LOGIN_SUCCESS';
export const LOGIN_FAIL = '[users] LOGIN_FAIL';
export const LOGOUT = '[users] LOGOUT';
export const GETUSER = '[users] GETUSER';
export const GETUSER_SUCCESS = '[users] GETUSER_SUCCESS';
export const GETUSER_FAIL = '[users] GETUSER_FAIL';

// define Actions classes
export class LoginAction implements Action {
    readonly type = LOGIN;
    constructor(public payload: User) { }
}

export class LoginSuccessAction implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor(public payload: string) { }
}

export class LoginFailAction implements Action {
    readonly type = LOGIN_FAIL;
    constructor(public payload: any) { }
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
    | LoginSuccessAction
    | LoginFailAction
    | LogoutAction
    | getUserAction
    | getUserSuccessAction
    | getUserFailAction;


