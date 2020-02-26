import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent {
  form: FormGroup;

  constructor(private http: HttpClient,
              private snack: MatSnackBar,
              formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: new FormControl('', [Validators.required]),
    });
  }

  followNews() {
    if (this.form.valid) {
      this.http.post('https://usebasin.com/f/e7f3447dfce0', this.form.value)
        .subscribe(this.showSnack.bind(this), this.showSnack.bind(this));
    }
  }

  private showSnack() {
    this.snack.open('Спасибо за подписку! Ждите наши письма!', '', {duration: 1500});
    this.form.reset();
  }
}
