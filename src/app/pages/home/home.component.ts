import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public selectValues: string[] = [
    'opt 1',
    'opt 2',
    'opt 3',
    'opt 4',
  ];

  form: FormGroup = new FormGroup({
    input: new FormControl(),
    select: new FormControl(),
    calendar: new FormControl(),
  })
}
