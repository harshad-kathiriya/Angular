import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CoreModule } from 'src/app/core/core.modules';
import { getConsents } from 'src/app/store/selectors';
import { GiveConsentComponent } from './give-consent.component';
import { routes } from '../consents-routing.module';
import { Location } from '@angular/common';

describe('GiveConsentComponent', () => {
  let component: GiveConsentComponent;
  let fixture: ComponentFixture<GiveConsentComponent>;
  let store: MockStore;
  let location: Location;

  const initialState = { consents: [
    { name:'Jack Smith', email:'jack.smith@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },
    { name:'Mary Williams', email:'Mary.Williams@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },
    { name:'Robert Miller', email:'Susan.Williams@test.com', aggrements: [ "Receive newsletter","Contribute to anonymous visit statistics" ] },    
    { name:'Richard Davis', email:'Susan.Williams@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },

  ], loading: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveConsentComponent ],
      imports:[
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CommonModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatInputModule
      ],
      providers:[
        FormsModule,
        FormBuilder,
        ReactiveFormsModule,
        RouterTestingModule,
        provideMockStore({ 
          selectors: [{
            selector: getConsents,
            value: initialState
          }]
         })
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    location = TestBed.inject(Location);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable button if all aggrements are selected', () => {

    component.submitForm.controls["aggrement1"].setValue(true);
    component.submitForm.controls["aggrement2"].setValue(true);
    component.submitForm.controls["aggrement3"].setValue(true);
     
    component.onAggrement();

    expect(component.enableButton).toBeTruthy();
  });

  it('should enable button if aggrement is selected', () => {

    component.submitForm.controls["aggrement1"].setValue(true);
    component.submitForm.controls["aggrement2"].setValue(false);
    component.submitForm.controls["aggrement3"].setValue(false);
     
    component.onAggrement();

    expect(component.enableButton).toBeTruthy();
  });

 it('should disable button if aggrement is not selected', () => {

    component.submitForm.controls["aggrement1"].setValue(false);
    component.submitForm.controls["aggrement2"].setValue(false);
    component.submitForm.controls["aggrement3"].setValue(false);
     
    component.onAggrement();

    expect(component.enableButton).toBeFalsy();
  });
  
  it('name should be required field', () => {

    component.submitForm.controls["name"].setValue(null);
    let control = component.isRequireField("name");
    
    expect(control).toBeUndefined();
    
  });

  it('email should be valid', () => {

    let email = component.submitForm.controls['email'];
    expect(email.valid).toBeFalsy();

    email.setValue("john@test.com");
    let errors = email.errors || {};
    expect(errors).toBeDefined();
    expect(errors["required"]).toBeFalsy();
    expect(errors["pattern"]).toBeFalsy();

    let control = component.isEmailValid("email");
    expect(control).toBeFalsy()
    
  });


  it('should submit the form', () => {

    expect(component.submitForm.valid).toBeFalsy();
    component.submitConsent();

    component.submitForm.controls["name"].setValue('john');
    component.submitForm.controls["email"].setValue('john@test.com');
    component.submitForm.controls["aggrement1"].setValue(true);
    component.submitForm.controls["aggrement2"].setValue(true);
    component.submitForm.controls["aggrement3"].setValue(true);

    expect(component.submitForm.valid).toBeTruthy();
    component.submitConsent();


    expect(location.path()).toBe('');

  });

});
