import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ListConsentsComponent } from './list-consents.component';

describe('ListConsentsComponent', () => {
  let component: ListConsentsComponent;
  let fixture: ComponentFixture<ListConsentsComponent>;
  let store: MockStore;
  const initialState = { consents: [], loading: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsentsComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers:[
        FormsModule,
        ReactiveFormsModule,
        provideMockStore({ initialState })
      ]
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
});
