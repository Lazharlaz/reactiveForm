import { Component, ViewChild, inject, viewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Movie } from '../model/movie.model';
import * as Valid from '../validator/validator.form';

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.css',
})
export class SearchMovieComponent {


  typeOptions: string[] = ['Film', 'Serie', 'Episode'];
  ficheOptions: string[] = [ 'complète', 'courte'];
 

  private formBuilder = inject(FormBuilder);
  @ViewChild('titre') titre!: NgForm;
  signInForm = this.formBuilder.group({

    idTitre: this.formBuilder.group(
      {
        identifiant: ['', Validators.required],
        titre: ['', Validators.required],
      },
      {
        validators: Valid.isRequiredValidator('identifiant', 'titre'),
      }
    ),
    
    releaseYear: ['',  Valid.rangeDateValidator(1900,2500)],
    type: ['', Validators.required],
    fiche: ['', Validators.required],

  });


  onSubmit() {
   

    console.log(this.signInForm.value);
    
 
  }
}
