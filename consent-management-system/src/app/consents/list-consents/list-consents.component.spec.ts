import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsentsComponent } from './list-consents.component';

describe('ListConsentsComponent', () => {
  let component: ListConsentsComponent;
  let fixture: ComponentFixture<ListConsentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
