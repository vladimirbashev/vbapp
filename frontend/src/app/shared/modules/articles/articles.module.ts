import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './components/articles/articles.component';
import {ArticlesService} from "./services/articles.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {GetArticlesEffect} from "./store/effects/getArticlesEffect.service";
import {reducers} from "./store/reducers";
import {RouterModule} from "@angular/router";
import {ErrorMessageModule} from "../error-message/error-message.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticlesEffect]),
    StoreModule.forFeature('articles', reducers),
    RouterModule,
    ErrorMessageModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports: [
    ArticlesComponent
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule { }
