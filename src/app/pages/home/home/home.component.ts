import { Component } from '@angular/core';
import { HOME_CONFIG } from './home-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent {
  screens = HOME_CONFIG;
}

