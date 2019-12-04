import {Component, Input} from '@angular/core';
import {LandingConfig} from 'src/app/pages/home/home/landing-config';

@Component({
  selector: 'app-texted-screen',
  templateUrl: './texted-screen.component.html',
  styleUrls: ['./texted-screen.component.scss']
})
export class TextedScreenComponent {
  @Input() config: LandingConfig;
}
