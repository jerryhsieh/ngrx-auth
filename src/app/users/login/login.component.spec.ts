import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatCardModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShareModule } from '../../share.module';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs/Observable';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    class RouterStub {
        navigateByUrl(url: string) { return url; }
    }
    class UserServiceStub {
        getLoginStatus = jasmine.createSpy('getLoginStatus')
            .and.returnValue(Observable.of(true));

        logout = jasmine.createSpy('logout')
            .and.returnValue(true);
    }


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [ShareModule, BrowserAnimationsModule],
            providers: [
                { provide: UserService, useClass: UserServiceStub },
                { provide: Router, useClass: RouterStub },
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.form.valid).toBeFalsy();
    });

    it('username field validity', () => {
        // initial should be invalid
        let username = component.form.controls['username'];
        expect(username.valid).toBeFalsy();

        // fail if username is empty
        let errors = {};
        errors = username.errors || {};
        expect(errors['required']).toBeTruthy();

        // fail if username less than 5 char
        username.setValue("test");
        errors = username.errors || {};
        expect(errors['pattern']).toBeTruthy();

    })

    it('submit a form', () => {
        expect(component.form.valid).toBeFalsy();
        component.form.controls['username'].setValue('Jason');
        component.form.controls['password'].setValue('jason101');
        expect(component.form.valid).toBeTruthy();
        // let user: User
        // component.loggedIn.subscribe(value => user = value);
        // component.login();
        // expect(user.username).toBe("Jason");
        // expect(user.password).toBe("jason101");
    })

});
