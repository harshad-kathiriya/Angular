
// currently, service is not a part of the app, will be added later on.
// just implement for demo purpose.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { ConsentsDTO } from "../DTO/ConsentsDTO";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ConsentsService {

    public consents: ConsentsDTO[]  = [];

    constructor(private http: HttpClient) {
    }


    getConsents() : Observable<any> {
        // return this.http.get<ConsentsDTO[]>(`${environment.consentAPI.v1}consents`)
        //     .pipe(map((res: any) => res));
        return of<any>({
            consents: this.consents,
            totalRecords: this.consents.length
        });
    }
    
    setConsents(consent: ConsentsDTO) : Observable<ConsentsDTO> {
        // return this.http.post<ConsentsDTO>(`${environment.consentAPI.v1}consents`, consent)
        //     .pipe(map((res:any) => res));
        this.consents = [...this.consents, consent] ;
        return of(consent);
    }    

} 