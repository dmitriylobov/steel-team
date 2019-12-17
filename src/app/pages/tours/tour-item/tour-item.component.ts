import {Component, Input} from '@angular/core';
import {Tour} from '../tour';

@Component({
  selector: 'app-tour-item',
  templateUrl: './tour-item.component.html',
  styleUrls: ['./tour-item.component.scss']
})
export class TourItemComponent {
  @Input() item: Partial<Tour>;
}
