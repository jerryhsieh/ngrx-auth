//
//
// File name : index.ts
// Created by: Jerry Hsieh @ 2018-01-02
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { UserEffects } from './users.effects';
import { ReportEffects } from './report.effects';
import { RouterEffects } from './router.effects';

export const effects: any[] = [UserEffects, ReportEffects, RouterEffects];

export * from './users.effects';
export * from './report.effects';
export * from './router.effects';
