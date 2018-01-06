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
import { MatSnackBar } from '@angular/material';

//import { UserService } from '../service/user.service';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../store';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    constructor(
        private fb: FormBuilder,
        private store: Store<fromRoot.State>,
        //private userService: UserService,
        private snackbar: MatSnackBar,
        private router: Router) { }

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
        this.store.dispatch(new fromRoot.LoginAction(this.form.value));
        this.store.select(fromRoot.getIsLogin)
            .subscribe(res => {
                if (res) {
                    this.snackbar.open('登入成功', 'OK', { duration: 3000 });
                    //this.router.navigate(['/member']);
                    this.store.dispatch(new fromRoot.Go({ path: ['/member'] }));
                } else {
                    this.snackbar.open('請檢查使用者名稱或密碼', 'OK', { duration: 3000 });
                }
            })

        /*
        this.userService.login(this.form.value)
            .subscribe(res => {
                if (res) {
                    this.router.navigate(['/member']);
                }
            })
        */
    }
}
