//
//
// File name : router.reducers.ts 
// Created by: Jerry Hsieh @ 2018-01-12
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';

import { ActionReducerMap, createFeatureSelector, Action } from '@ngrx/store';
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';


export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
    fragment: string;
};

export type RouterState = RouterReducerState<RouterStateUrl>;

export const reducer = routerReducer;

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerReducer');

export class CustomeSerializer implements RouterStateSerializer<RouterStateUrl>{
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const { queryParams, fragment } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;

        while (state.firstChild) {
            state = state.firstChild;

        }
        const { params } = state;
        return { url, queryParams, params, fragment };
    }
}
