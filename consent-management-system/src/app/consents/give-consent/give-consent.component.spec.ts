import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

describe('GiveConsentComponent', () => {
  let component: GiveConsentComponent;
  let fixture: ComponentFixture<GiveConsentComponent>;
  let store: MockStore;
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
        RouterTestingModule,
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
        ReactiveFormsModule,
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
