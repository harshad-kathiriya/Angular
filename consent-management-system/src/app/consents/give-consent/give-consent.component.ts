import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ConsentsDTO } from 'src/app/DTO/ConsentsDTO';
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
      name: new FormControl(null),
      email: new FormControl(null),
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

  submitConsent()  {

    if(this.submitForm.valid) {
      let consentsDTO:ConsentsDTO = {
        name: this.submitForm.get('name')?.value,
        email:this.submitForm.get('email')?.value,
        aggrements: [
          this.submitForm.get('aggrement1')?.value,
          this.submitForm.get('aggrement2')?.value,
          this.submitForm.get('aggrement3')?.value
        ]
      }; 
      this.store.dispatch(AddConsents({ payload: consentsDTO}));

      // redirect to list page
      this.router.navigate(['/consents']);
    }

  }
}
