import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent {
  @Input('value') value: any

  getMessage() {
    return this.value && typeof this.value !== 'string' ? 'Internal error' : this.value
  }
}
