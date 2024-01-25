import {Component, OnInit} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Store, select} from '@ngrx/store'
import {Observable} from 'rxjs'

import {
  isSubmittingSelector,
  errorSelector
} from 'src/app/auth/store/selectors'
import {TokenRequestInterface} from 'src/app/auth/types/tokenRequest.interface'
import {loginAction} from 'src/app/auth/store/actions/login.action'

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  error$: Observable<string>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    const request: TokenRequestInterface = this.form.value;
    this.store.dispatch(loginAction({request}));
  }
}
