import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { ConsentsDTO } from "../DTO/ConsentsDTO";
import { map } from 'rxjs/operators';

// consent service
@Injectable({
    providedIn: 'root'
})

export class ConsentsService {
    

    constructor(private http: HttpClient) {
    }


    getConsents() : Observable<any> {
        return this.http.get<ConsentsDTO[]>(`/consents`)
            .pipe(map((res: any) => res));
    }
    
    setConsents(consent: ConsentsDTO) : Observable<ConsentsDTO> {
        return this.http.post<ConsentsDTO>(`/consents`, consent)
            .pipe(map((res:any) => res));
    }    

} 