import {Component, Input} from '@angular/core';
import {TAGS} from '../../tags';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent {
  @Input() tags: TAGS[];
}
