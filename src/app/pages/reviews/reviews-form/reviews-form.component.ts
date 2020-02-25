import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
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
      'name': new FormControl(''), 'tel': new FormControl(''), 'review': new FormControl(''),
    });
  }

  onSubmit(event) {
    this.dialogRef.close(this.form.value);
    event.preventDefault();
  }
}
