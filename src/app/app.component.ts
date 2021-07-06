import { Component, VERSION } from '@angular/core';
import { MyServiceService } from './services/my-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myService: MyServiceService;
  resq: any;
  name = 'Angular ' + VERSION.major;
}
