import { Component } from '@angular/core';
import { LANGUAGES } from "./languages";

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  languages = LANGUAGES;
  active = false;
  selected = LANGUAGES[0];
}
