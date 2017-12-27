//
//
// File name : navbar.component.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//


import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserService } from '../users/service/user.service';
import 'rxjs/add/observable/interval';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    login$: BehaviorSubject<boolean>;
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.login$ = this.userService.getLoginStatus()
    }

}
