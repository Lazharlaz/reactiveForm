import { Component } from '@angular/core';
import { User } from '../model/user.model'


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {

  newUser: User = {
    email: "",
    firstname: "",
    lastname: "",
  };


  onSubmit(): void {
    // form submitted
    console.log('Formulaire envoyé !');
  }
}
