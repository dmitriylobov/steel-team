import {Component, Input} from '@angular/core';
import {TOURS} from '../tours-config';
import {Tour} from '../tour';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.scss']
})
export class ToursListComponent {
  @Input() list: Partial<Tour>[] = TOURS;
}
