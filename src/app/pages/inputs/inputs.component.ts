import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {
  form: FormGroup = new FormGroup({
    inputText: new FormControl(''),
    password: new FormControl(''),
    textArea: new FormControl('')
  });
}
