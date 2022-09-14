import { Component } from '@angular/core';
import {LoggerService} from "my-logger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-library';

  constructor(private loggerService: LoggerService) {
    this.loggerService.log('Hello, world!');
  }
}
