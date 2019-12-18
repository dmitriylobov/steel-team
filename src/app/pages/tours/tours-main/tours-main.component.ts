import {Component} from '@angular/core';
import {Tour} from '../tour';
import {TOURS} from '../tours-config';

@Component({
  selector: 'app-tours-main',
  templateUrl: './tours-main.component.html',
  styleUrls: ['./tours-main.component.scss']
})
export class ToursMainComponent {
  tours: Partial<Tour>[] = TOURS;
}
