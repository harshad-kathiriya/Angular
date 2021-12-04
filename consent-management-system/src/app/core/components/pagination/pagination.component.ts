import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  public currentPage: number = 1;
  public totalPages: number = 0;
  public disableNext: boolean = false;
  public disablePrev: boolean = false;
  
  @Input() totalRecords: number  = 0;
  @Input() pageSize: number = 2;
    
  @Output() changePerPage: EventEmitter<any> = new EventEmitter<any>();
  @Output() nextPage: EventEmitter<any> = new EventEmitter<any>();
  @Output() prevPage: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.disablePrevNextButton();
  }

  ngOnChanges() {
    this.getTotalPages();
  }

  getTotalPages() {
    this.totalPages = this.totalRecords ? Math.ceil(this.totalRecords / this.pageSize) : 0;
  }

  pages() {
    let pages: any[] = [];

    if(this.totalPages == 0)
      return [];

    let pageCount = 0;    

    if(this.currentPage === 1) {
      pageCount = this.currentPage + 3;
      pageCount = pageCount >= this.totalPages ? this.totalPages : pageCount;

      for(let i = 1; i <= pageCount; i++) {
        pages.push(i);
      }
    } else if (this.currentPage == 2) {
      pageCount = this.currentPage + 2;
      pageCount = pageCount >= this.totalPages ? this.totalPages : pageCount;

      for(let i = 1; i <= pageCount; i++) {
        pages.push(i);
      }
    } else if(this.currentPage == this.totalPages) {
      pageCount = this.totalPages;
      let firstPage = this.currentPage > 3 ? this.currentPage - 3 : 1 ; 
      
      for(let i = firstPage; i <= pageCount; i++) {
        pages.push(i);
      }
    } else if(this.currentPage < this.totalPages) {
      
      let prevPage = (this.currentPage - 2) == 0 ? 1 : this.currentPage - 2 ; 
      for(let i = prevPage; i < this.currentPage; i++) {
        pages.push(i);
      }      
    
      let nextPage = (this.currentPage + 1) >= this.totalPages ? this.totalPages :  this.currentPage + 1;
      for(let i = this.currentPage; i <= nextPage; i++) {
        pages.push(i);
      }

    }
    return pages;
  }

  onChangePerPage(page: any){
    this.currentPage = page;
    this.disablePrevNextButton();      
    this.changePerPage.emit(page);
  }

  onPrev() {
    this.currentPage = this.currentPage - 1;
    this.disablePrevNextButton();
    this.prevPage.emit(this.currentPage);
  }

  onNext() {
    this.currentPage = this.currentPage + 1;
    this.disablePrevNextButton();
    this.nextPage.emit(this.currentPage);
  }

  disablePrevNextButton() {
    // disable prev/next button
    this.disablePrev = this.currentPage === 1 ? true : false ;
    this.disableNext = this.totalPages === this.currentPage ? true : false;    
  }

}
