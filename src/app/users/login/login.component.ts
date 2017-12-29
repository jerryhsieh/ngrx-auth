//
//
// File name : login.component.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService) { }

    ngOnInit() {
        this.form = this.fb.group({
            username: ['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
            password: ['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
            rememberMe: [true]
        });

    }
    get username() { return this.form.get('username'); }
    get password() { return this.form.get('password'); }
    get rememberMe() { return this.form.get('rememberMe') }

    login() {
        console.log(this.form.value);
        this.userService.login(this.form.value)
            .subscribe(res => {
                if (res) {
                    this.router.navigate(['/member']);
                }
            })
    }
}
