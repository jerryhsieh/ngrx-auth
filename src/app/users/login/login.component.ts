import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login() {
        console.log(this.form.value);
    }
}
