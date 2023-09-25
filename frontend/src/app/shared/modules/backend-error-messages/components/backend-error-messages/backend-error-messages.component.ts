import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit{
  @Input('value') value: Observable<any>
  message: Observable<string>

  ngOnInit(): void {
    this.message = this.value.pipe(
      map((value) => {
        return value && typeof value !== 'string' ? 'Internal error' : value
      })
    )
  }

}
