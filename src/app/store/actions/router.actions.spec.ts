//
//
// File name : router.actions.spec.ts
// Created by: Jerry Hsieh @ 2018-01-07
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//


import * as actions from './router.actions';

describe('Router Actions', () => {
    describe('Go action', () => {
        it('should create go action', () => {
            const payload = { path: ['/test'] };
            const action = new actions.Go(payload);
            expect({ ...action }).toEqual({
                type: actions.GO,
                payload
            })
        })
    });

    describe('Back action', () => {
        it('should create back action', () => {
            const action = new actions.Back();
            expect({ ...action }).toEqual({
                type: actions.BACK
            })
        })
    });

    describe('Forward action', () => {
        it('should create forward action', () => {
            const action = new actions.Forward();
            expect({ ...action }).toEqual({
                type: actions.FORWARD
            })
        })
    });


});
