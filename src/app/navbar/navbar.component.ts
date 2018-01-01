//
//
// File name : navbar.component.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { UserService } from '../users/service/user.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    login$: Observable<boolean>;
    user$: Observable<string>;
    constructor(
        private userService: UserService,
        private router: Router) { }

    ngOnInit() {
        this.login$ = this.userService.getLoginStatus();
        this.user$ = this.userService.getCurrentUser();
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['/']);
    }
}
