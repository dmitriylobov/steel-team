import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.scss']
})
export class TourFormComponent {

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<TourFormComponent>, fb: FormBuilder) {
    this.form = fb.group({
      'name': new FormControl('', [Validators.required]),
      'tel': new FormControl('', [Validators.required]),
      'age': new FormControl('', [Validators.required]),
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

}
