import { Component } from '@angular/core';
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FormComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
