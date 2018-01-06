//
//
// File name : index.ts 
// Created by: Jerry Hsieh @ 2018-01-06
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { AuthGuard } from './auth.guard';
import { ReportGuard } from './report.guard';
import { ReportExistGuard } from './report-exist.guard';

export const guards: any[] = [AuthGuard, ReportGuard, ReportExistGuard];

export * from './auth.guard';
export * from './report.guard';
export * from './report-exist.guard';

