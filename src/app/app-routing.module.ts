import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
  { 
    path: '', 
    component: UserProfileComponent
  },
  { 
    path: 'signup', 
    component: SignupComponent 
  },
  { 
    path: 'user', 
    component: UserProfileComponent
  },
  { 
    path: 'movie', 
    component: SearchMovieComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
