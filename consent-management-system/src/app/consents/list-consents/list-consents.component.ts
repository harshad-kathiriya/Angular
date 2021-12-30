import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { select, Store } from '@ngrx/store';
import { slice } from 'lodash';
import { Observable } from 'rxjs';
import { ConsentsDTO } from 'src/app/DTO/ConsentsDTO';
import { GetConsents } from 'src/app/store/actions';
import { State } from 'src/app/store/redecuers';
import { getConsents } from 'src/app/store/selectors';

// list consent component
@Component({
  selector: 'app-list-consents',
  templateUrl: './list-consents.component.html',
  styleUrls: ['./list-consents.component.scss']
})

export class ListConsentsComponent implements OnInit, OnDestroy{

  public consents$: Observable<ConsentsDTO[]> | null = null
  private consentsSub: any = null;
  public consentsData: any | null;
  public consentsPaginateData: any | null;
   
  public totalRecords: number = 0;
  public currentPage: number = 1;
  public pageSize: number = 2;
  // columns
  public tableColumns: string[] = ['name', 'email', 'aggrements'];

  constructor(private store: Store<State>, private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle("Consents");
    this.store.dispatch(GetConsents());

    this.consents$ = this.store.pipe(select(getConsents));
    this.consentsSub = this.consents$.subscribe((items: any) => {
      if(items && items.consents && items.consents.length > 0) {
        this.consentsData = items.consents; 
        this.totalRecords = items && items.consents ? items.consents.length : 0;
        this.onPaginate();
      }
    }); 
  }


  ngOnDestroy() {
    if(this.consentsSub) {
      this.consentsSub.unsubscribe();
    }
  }
  // page change event
  onPageChange(page: any) {
    this.currentPage = page; 
    this.onPaginate();   
  }

  // previous page event
  onPrevPage(page: any) {
    this.currentPage = page;
    this.onPaginate();
  }

  // next page event
  onNextPage(page: any) {
    this.currentPage = page;
    this.onPaginate();
  }

  // set pagination 
  onPaginate()  {
    let result: ConsentsDTO[][] = slice(this.consentsData, (this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
    this.consentsPaginateData = new MatTableDataSource<ConsentsDTO[]>(result);
  }
}