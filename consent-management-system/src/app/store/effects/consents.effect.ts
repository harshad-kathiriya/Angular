import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { ConsentsDTO } from "src/app/DTO/ConsentsDTO";
import { ConsentsService } from "src/app/services/consents.service";
import { AddConsentsFail, AddConsentsSuccess, ConsentActionTypes, GetConsentsFail, GetConsentsSuccesss } from "../actions";

@Injectable()
export class ConsentsEffects {

    constructor( 
        private actions$: Actions,
        private consentsService: ConsentsService
        ) {};

    getConsents$ = createEffect(() => 
        this.actions$.pipe(
            ofType(ConsentActionTypes.GET_CONSENTS),
            switchMap((action) => this.consentsService.getConsents()
                .pipe(
                    map((consents: ConsentsDTO[]) => GetConsentsSuccesss({payload: consents})),
                    catchError((error) => of(GetConsentsFail({payload: error})))
                ) 
            )
        )
    );

    AddConsents$ = createEffect(() => 
        this.actions$.pipe(
            ofType(ConsentActionTypes.ADD_CONSENTS),
            switchMap((action: any) => this.consentsService.setConsents(action.payload)
                .pipe(
                    map((consents: ConsentsDTO) => AddConsentsSuccess({payload: consents})),
                    catchError((error) => of(AddConsentsFail({payload: error})))
                ) 
            )
        )
    );

}

