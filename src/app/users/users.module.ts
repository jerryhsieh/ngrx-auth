import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';

import { UserService } from './service/user.user.service';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule
    ],
    providers: [
        UserService
    ],
    declarations: [LoginComponent]
})
export class UsersModule { }
