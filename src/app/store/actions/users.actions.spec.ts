//
//
// File name : users.actions.spec.ts
// Created by: Jerry Hsieh @ 2018-01-07
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//


import * as fromUser from './users.actions';

import { User } from '../../models';

describe('User Actions', () => {
    describe('Login Actions', () => {
        describe('Login', () => {
            it('should create login action', () => {
                const payload = { username: 'test' };
                const action = new fromUser.LoginAction(payload);
                expect({ ...action }).toEqual({
                    type: fromUser.LOGIN,
                    payload
                })
            })
        });

        describe('Login Success', () => {
            it('should create login success action', () => {
                const payload = 'login success';
                const action = new fromUser.LoginSuccessAction(payload);
                expect({ ...action }).toEqual({
                    type: fromUser.LOGIN_SUCCESS,
                    payload
                })
            })
        });

        describe('Login Fail', () => {
            it('should create login fail action', () => {
                const payload = 'login fail';
                const action = new fromUser.LoginFailAction(payload);
                expect({ ...action }).toEqual({
                    type: fromUser.LOGIN_FAIL,
                    payload
                })
            })
        });
    })

    describe('Logout Actions', () => {
        describe('Logout', () => {
            it('should create logout action', () => {
                const action = new fromUser.LogoutAction();
                expect({ ...action }).toEqual({
                    type: fromUser.LOGOUT
                })
            })
        });

        describe('Logout Success', () => {
            it('should create logout  success action', () => {
                const action = new fromUser.LogoutSuccessAction();
                expect({ ...action }).toEqual({
                    type: fromUser.LOGOUT_SUCCESS
                })
            })
        });

        describe('Logout Fail', () => {
            it('should create logout fail action', () => {
                const action = new fromUser.LogoutFailAction();
                expect({ ...action }).toEqual({
                    type: fromUser.LOGOUT_FAIL
                })
            })
        });
    })

    describe('Get User Actions', () => {
        describe('Get User', () => {
            it('should create get user action', () => {
                const action = new fromUser.getUserAction();
                expect({ ...action }).toEqual({
                    type: fromUser.GETUSER
                })
            })
        });

        describe('Get User Success', () => {
            it('should create get user success action', () => {
                const payload = 'test';
                const action = new fromUser.getUserSuccessAction(payload);
                expect({ ...action }).toEqual({
                    type: fromUser.GETUSER_SUCCESS,
                    payload
                })
            })
        });

        describe('Get User Fail', () => {
            it('should create get user fail action', () => {
                const payload = 'get failed'
                const action = new fromUser.getUserFailAction(payload);
                expect({ ...action }).toEqual({
                    type: fromUser.GETUSER_FAIL,
                    payload

                })
            })
        });


    })


});
