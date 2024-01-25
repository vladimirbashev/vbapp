import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit{
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
