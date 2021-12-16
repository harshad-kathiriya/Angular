import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get total pages', () => {
    component.totalRecords = 10;
    component.getTotalPages();   
    expect(component.totalPages).toBeGreaterThanOrEqual(1);
  });
  
  it('should get first page', () => {
    component.totalRecords = 2;
    component.totalPages = 1;
    let pages = component.pages();
    let expectedArray: number[] = [1];
    expect(pages).toEqual(expectedArray);
  });

  it('should get second page', () => {
    component.totalRecords = 10;
    component.totalPages = 5;
    component.currentPage = 2;
    let pages = component.pages();
    let expectedArray: number[] = [1,2,3,4];
    
    expect(pages).toEqual(expectedArray);
  });

  it('should get fourth page', () => {
    component.totalRecords = 10;
    component.totalPages = 5;
    component.currentPage = 4;
    let pages = component.pages();
    let expectedArray: number[] = [2,3,4,5];
    
    expect(pages).toEqual(expectedArray);
  });

  it('should get last page', () => {
    component.totalRecords = 10;
    component.totalPages = 5;
    component.currentPage = 5;
    let pages = component.pages();
    let expectedArray: number[] = [2,3,4,5];
    
    expect(pages).toEqual(expectedArray);
  });

  it('should change page', () => {
    component.currentPage = 1
    component.onChangePerPage(5);   
    expect(component.currentPage).toEqual(5);
  });
  
  it('should get next page', () => {
    component.currentPage = 1
    component.onNext();   
    expect(component.currentPage).toEqual(2);
  });
  
  it('should get prev page', () => {
    component.currentPage = 2
    component.onPrev();   
    expect(component.currentPage).toEqual(1);
  });

  it('should disable prev button', () => {
    component.currentPage = 1
    component.disablePrevNextButton();
    
    expect(component.disablePrev).toBeTruthy();
  });

  it('should disable next button', () => {
    component.currentPage = 2
    component.totalPages = 2
    component.disablePrevNextButton();

    expect(component.disableNext).toBeTruthy();
  });



});
