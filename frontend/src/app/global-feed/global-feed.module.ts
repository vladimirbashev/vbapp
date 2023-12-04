import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import {RouterModule} from "@angular/router";
import {ArticlesModule} from "../shared/modules/articles/articles.module";

const routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
]

@NgModule({
  declarations: [
    GlobalFeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticlesModule
  ]
})
export class GlobalFeedModule { }
