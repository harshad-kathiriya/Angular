import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CoreModule } from 'src/app/core/core.modules';
import { ConsentsDTO } from 'src/app/DTO/ConsentsDTO';
import { getConsents } from 'src/app/store/selectors';
import { ListConsentsComponent } from './list-consents.component';

describe('ListConsentsComponent', () => {
  let component: ListConsentsComponent;
  let fixture: ComponentFixture<ListConsentsComponent>;
  let store: MockStore;
  const initialState = { consents: [
    { name:'Jack Smith', email:'jack.smith@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },
    { name:'Mary Williams', email:'Mary.Williams@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },
    { name:'Robert Miller', email:'Susan.Williams@test.com', aggrements: [ "Receive newsletter","Contribute to anonymous visit statistics" ] },    
    { name:'Richard Davis', email:'Susan.Williams@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },

  ], loading: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsentsComponent ],
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
    fixture = TestBed.createComponent(ListConsentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should change page', () => {
    component.currentPage = 1
    component.onPageChange(5);   
    expect(component.currentPage).toEqual(5);
  });
  
  it('should get next page', () => {
    component.currentPage = 1
    component.onNextPage(2);   
    expect(component.currentPage).toEqual(2);
  });
  
  it('should get previous page', () => {
    component.currentPage = 2;
    component.onPrevPage(1);   
    expect(component.currentPage).toEqual(1);
  });

  it('should get pagination data', () => {
    component.currentPage = 2;
    component.pageSize = 2;
    component.consentsData = initialState.consents; // mock data    
    component.onPaginate();

    let expectedData:ConsentsDTO[] = [
      { name:'Robert Miller', email:'Susan.Williams@test.com', aggrements: [ "Receive newsletter","Contribute to anonymous visit statistics" ] },    
      { name:'Richard Davis', email:'Susan.Williams@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },  
    ];
    
    let firstRow:any | undefined = component.consentsPaginateData?.data[0]; 

    expect(component.consentsPaginateData).toBeDefined();
    expect(component.consentsPaginateData?.data).toBeDefined();
    expect(component.consentsPaginateData?.data.length).toBeGreaterThanOrEqual(1);  
    expect(firstRow).toBeDefined();
    expect(firstRow?.name).toEqual(expectedData[0].name);
  });

});
