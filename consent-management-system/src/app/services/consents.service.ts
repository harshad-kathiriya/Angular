
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
    // fake data 
    public consents: ConsentsDTO[]  = [
        { name:'Jack Smith', email:'jack.smith@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },
        { name:'Mary Williams', email:'Mary.Williams@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },
        { name:'Robert Miller', email:'Susan.Williams@test.com', aggrements: [ "Receive newsletter","Contribute to anonymous visit statistics" ] },    
        { name:'Richard Davis', email:'Susan.Williams@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },
        { name:'Michael Garcia', email:'Susan.Williams@test.com', aggrements: [ "Be shown targeted ads","Contribute to anonymous visit statistics" ] },
        { name:'Elizabeth Johnson', email:'Elizabeth.Williams@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },
        { name:'Linda Williams', email:'Linda.Williams@test.com', aggrements: [ "Receive newsletter","Contribute to anonymous visit statistics" ] },
        { name:'Jessica Davis', email:'Susan.Williams@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },
        { name:'Joseph Garcia', email:'Susan.Williams@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads" ] },
        { name:'Thomas Brown', email:'Susan.Williams@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },
        { name:'Margaret Miller', email:'Susan.Williams@test.com', aggrements: [ "Receive newsletter","Contribute to anonymous visit statistics" ] },    
        { name:'Jessica Davis', email:'Susan.Williams@test.com', aggrements: [ "Receive newsletter","Be shown targeted ads","Contribute to anonymous visit statistics" ] },
        { name:'Sarah Garcia', email:'Susan.Williams@test.com', aggrements: [ "Be shown targeted ads","Contribute to anonymous visit statistics" ] },
    ];

    constructor(private http: HttpClient) {
    }


    getConsents() : Observable<any> {
        // return this.http.get<ConsentsDTO[]>(`${environment.consentAPI.v1}consents`)
        //     .pipe(map((res: any) => res));
        return of<any>({
            consents: this.consents.map( (item) => {
                return item;
            }),
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