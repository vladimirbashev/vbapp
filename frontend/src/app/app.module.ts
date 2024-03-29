import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthModule} from "./auth/auth.module";
import {environment} from "../environments/environment";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import {PersistanceService} from "./shared/services/persistance.service";
import {AuthInterceptor} from "./shared/services/authinterceptor.service";
import {AppBarModule} from "./shared/modules/app-bar/app-bar.module";
import {GlobalFeedModule} from "./global-feed/global-feed.module";
import {BannerModule} from "./shared/modules/banner/banner.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({router: routerReducer}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([]),

    MatToolbarModule,

    AuthModule,
    AppBarModule,
    BannerModule,
    GlobalFeedModule
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
