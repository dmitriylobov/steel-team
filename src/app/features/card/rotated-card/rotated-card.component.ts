import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-rotated-card',
  templateUrl: './rotated-card.component.html',
  styleUrls: ['./rotated-card.component.scss']
})
export class RotatedCardComponent {
  @Input() top: TemplateRef<any>;
  @Input() bottom: TemplateRef<any>;
  @Input() width: string;
  @Input() height: string;
}
