import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ConsentsDTO } from 'src/app/DTO/ConsentsDTO';
import { ConsentsEnum } from 'src/app/enums/consents.enum';
import { AddConsents } from 'src/app/store/actions/consents.action';
import { State } from 'src/app/store/redecuers';


@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss']
})
export class GiveConsentComponent implements OnInit{

  public submitForm: FormGroup;
  public enableButton: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private store: Store<State>,
    private router: Router) {
    
    this.submitForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required,Validators.email]),
      aggrement1: new FormControl(null),
      aggrement2: new FormControl(null),
      aggrement3: new FormControl(null)
    });
   }

  ngOnInit(): void {

  }

  onAggrement() {
    if(this.submitForm.get('aggrement1')?.value === true 
      ||  this.submitForm.get('aggrement2')?.value === true
      ||  this.submitForm.get('aggrement3')?.value === true) {
        this.enableButton = true;
      } else {
        this.enableButton = false;
      }
  }

  isRequireField(field: 'name' | 'email') {
    let control = this.submitForm.get(field);

    return control?.hasError("required") && control?.markAsTouched({ onlySelf: true});
  }
  isEmailValid(field: 'email') {
    let control = this.submitForm.get(field);

    return control?.hasError("email") && control?.markAsTouched({ onlySelf: true});
  }
  submitConsent()  {

    if(this.submitForm.valid) {
      
      // build consents dto
      let consentsDTO:ConsentsDTO = {
        name: this.submitForm.get('name')?.value,
        email:this.submitForm.get('email')?.value,
        aggrements: [
          this.submitForm.get('aggrement1') && this.submitForm.get('aggrement1')?.value ?
             ConsentsEnum.AGGREMENT1 : '',
          this.submitForm.get('aggrement2') && this.submitForm.get('aggrement2')?.value ?
            ConsentsEnum.AGGREMENT2 : '',
          this.submitForm.get('aggrement3') && this.submitForm.get('aggrement3')?.value ?
            ConsentsEnum.AGGREMENT3 : ''          
        ]
      }; 

      // add consents
      this.store.dispatch(AddConsents({ payload: consentsDTO}));

      // redirect to list page
      this.router.navigate(['/consents']);

    } else {
      // validate controls
      Object.keys(this.submitForm.controls).forEach(field => { 
        const control = this.submitForm.get(field);            
        control?.markAsTouched({ onlySelf: true });    
      });
    }

  }
}
