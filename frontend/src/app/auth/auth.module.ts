import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

import { RegisterComponent } from './components/register/register.component';
import {reducers} from "./store/reducers";
import {StoreModule} from "@ngrx/store";

const routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('auth', reducers),
        ReactiveFormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatInputModule
    ]
})
export class AuthModule { }
