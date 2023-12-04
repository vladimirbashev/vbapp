import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './components/articles/articles.component';
import {ArticlesService} from "./services/articles.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {GetArticlesEffect} from "./store/effects/getArticlesEffect.service";
import {reducers} from "./store/reducers";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticlesEffect]),
    StoreModule.forFeature('articles', reducers),
    RouterModule
  ],
  exports: [
    ArticlesComponent
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule { }
