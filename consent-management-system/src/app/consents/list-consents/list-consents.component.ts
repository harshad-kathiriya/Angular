import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConsentsDTO } from 'src/app/DTO/ConsentsDTO';
import { GetConsents } from 'src/app/store/actions';
import { State } from 'src/app/store/redecuers';
import { getConsents } from 'src/app/store/selectors';

@Component({
  selector: 'app-list-consents',
  templateUrl: './list-consents.component.html',
  styleUrls: ['./list-consents.component.scss']
})
export class ListConsentsComponent implements OnInit {

  public consents$: Observable<ConsentsDTO[]> | null = null

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(GetConsents());

    this.consents$ = this.store.pipe(select(getConsents));
   
  }

}
