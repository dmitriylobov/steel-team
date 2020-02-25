import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-reviews-form',
  templateUrl: './reviews-form.component.html',
  styleUrls: ['./reviews-form.component.scss']
})
export class ReviewsFormComponent {

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<ReviewsFormComponent>, fb: FormBuilder) {
    this.form = fb.group({
      'name': new FormControl('', [Validators.required]),
      'tel': new FormControl('', [Validators.required]),
      'review': new FormControl('', [Validators.required]),
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
