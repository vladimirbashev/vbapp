import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    AppBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLink
  ],
  exports: [AppBarComponent]
})
export class AppBarModule { }
