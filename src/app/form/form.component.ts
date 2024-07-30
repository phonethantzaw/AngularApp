import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name: string = '';
  email: string = '';
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }
}
