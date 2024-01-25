import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from '@ngrx/store'
import {registerAction} from "../../store/actions/register.actions";
import {isSubmittingSelector, errorSelector} from "../../store/selectors";
import {Observable} from "rxjs";
import {RegisterRequestInterface} from "../../types/registerRequest.interface";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  error$: Observable<string>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    console.log('initializeForm')
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('submit', this.form.value, this.form.valid);
      const request: RegisterRequestInterface = this.form.value;
      this.store.dispatch(registerAction({request}));
    }
  }
}
