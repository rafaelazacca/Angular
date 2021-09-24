import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
/*import { faCoffee } from '@fortawesome/free-solid-svg-icons';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(
    public auth: AuthService

  ) {}

}
