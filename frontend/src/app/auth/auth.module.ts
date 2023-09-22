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
import {BackendErrorMessagesModule} from "../shared/modules/backend-error-messages/backend-error-messages.module";
import {PersistanceService} from "../shared/services/persistance.service";

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
    EffectsModule.forFeature([RegisterEffect]),
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    BackendErrorMessagesModule
  ],
  providers: [AuthService, PersistanceService]
})
export class AuthModule { }
