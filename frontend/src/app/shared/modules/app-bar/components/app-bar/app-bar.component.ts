import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {
  isLoggedInSelector,
  isAnonymousSelector,
  currentUserSelector
} from 'src/app/auth/store/selectors'
import {UserInterface} from "../../../../types/user.interface";
import {currentUserAction} from "../../../../../auth/store/actions/currentUser.action";
import {logoutAction} from "../../../../../auth/store/actions/logout.action";


@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<UserInterface | null>

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }

  onLogout() {
    this.store.dispatch(logoutAction())
  }
}
