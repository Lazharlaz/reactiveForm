import { Component } from '@angular/core';


@Component({
  selector: 'app-user-profile',

  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '"two beer or not to beer"',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  imageSrc: string = this.user.photo;
  name:string = this.user.name;
  firstName:string = this.user.firstName;
  age:number = this.user.age;
  quote:string = this.user.quote;
  showMessage:boolean = false;


  masquerAge(): void  {
   this.showMessage ? this.showMessage = false : this.showMessage = true;
  }


}
