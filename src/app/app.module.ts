import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    MenuComponent,
    SignupComponent,
    MyFormComponent,
    SearchMovieComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
