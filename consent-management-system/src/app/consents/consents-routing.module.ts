import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GiveConsentComponent } from "./give-consent/give-consent.component";
import { ListConsentsComponent } from "./list-consents/list-consents.component";

// consent routes
export const routes: Routes = [
    {
        path:'',
        redirectTo: 'give-consent',
        pathMatch: 'full'
    },
    { path: 'give-consent', component: GiveConsentComponent},
    { path:'consents', component: ListConsentsComponent }
    
];



export const ConsentsRoutingModule = RouterModule.forChild(routes);