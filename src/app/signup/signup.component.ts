import { Component } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  onSubmit(): void {
    // form submitted
    console.log('Formulaire envoyé !');
  }
  newUser: User = {
    email: "",
    firstname: "",
    lastname: "",

  };
}
