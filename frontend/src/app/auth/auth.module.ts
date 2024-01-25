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
import {AuthService} from "./services/auth.service";
import {RegisterEffect} from "./store/effects/register.effect";
import {EffectsModule} from "@ngrx/effects";
import {ErrorMessageModule} from "../shared/modules/error-message/error-message.module";
import {PersistanceService} from "../shared/services/persistance.service";
import {LoginComponent} from "./components/login/login.component";
import {LoginEffect} from "./store/effects/login.effect";
import {CurrentUserEffect} from "./store/effects/currentUser.effect";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {LogoutEffect} from "./store/effects/logout.effect";

const routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      LogoutEffect,
      CurrentUserEffect
    ]),
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,

    ErrorMessageModule,
  ],
  providers: [
    AuthService,
    PersistanceService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ]
})
export class AuthModule { }
