import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, of } from "rxjs";
import { ConsentsDTO } from "../DTO/ConsentsDTO";

// intercept http request to return fake data.

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {

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
    
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(request.url == '/consents' && request.method == 'GET') {
            let data = {
                consents: this.consents.map( (item) => {
                        return item;
                    }),
                    totalRecords: this.consents.length
                };
            let response = { status: 200, body: data }
            return of(new HttpResponse(response));
        }
        if(request.url == '/consents' && request.method == 'POST') {
            this.consents = [...this.consents, request.body] ;
            let response = { status: 200, body: request.body }
            return of(new HttpResponse(response));
        }
        return next.handle(request);
    }
}

