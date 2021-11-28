import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConsentsDTO } from 'src/app/DTO/ConsentsDTO';
import { GetConsents } from 'src/app/store/actions';
import { State } from 'src/app/store/redecuers';
import { getConsents } from 'src/app/store/selectors';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-consents',
  templateUrl: './list-consents.component.html',
  styleUrls: ['./list-consents.component.scss']
})
export class ListConsentsComponent implements OnInit, OnDestroy, AfterViewInit {

  public consents$: Observable<ConsentsDTO[]> | null = null
  private consentsSub: any = null;
  public consentsData: any | null; 
  // columns
  public tableColumns: string[] = ['name', 'email', 'aggrements'];

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  
  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(GetConsents());

    this.consents$ = this.store.pipe(select(getConsents));
    this.consentsSub = this.consents$.subscribe((items: any) => {
      if(items && items.consents && items.consents.length > 0) {
        this.consentsData = new MatTableDataSource<ConsentsDTO[]>(items.consents); 
        console.log(items.consents);
      }
    }); 
  }

  ngOnDestroy() {
    if(this.consentsSub) {
      this.consentsSub.unsubscribe();
    }
  }

  ngAfterViewInit() {
    if(this.consentsData) {
      this.consentsData.paginator = this.paginator;
    }
  }

}
