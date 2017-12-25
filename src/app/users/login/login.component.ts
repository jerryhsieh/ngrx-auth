import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    constructor(private fb: FormBuilder,
        private userService: UserService) { }

    ngOnInit() {
        this.form = this.fb.group({
            username: ['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
            password: ['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
        });

    }
    get username() { return this.form.get('username'); }
    get password() { return this.form.get('password'); }

    login() {
        console.log(this.form.value);
        this.userService.login(this.form.value)
            .subscribe(res => {
                console.log('login ', res);
            })
    }
}
