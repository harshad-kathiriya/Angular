import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "../core/core.modules";
import { ConsentsRoutingModule } from "./consents-routing.module";
import { GiveConsentComponent } from "./give-consent/give-consent.component";
import { ListConsentsComponent } from "./list-consents/list-consents.component";


@NgModule({
   declarations: [
       ListConsentsComponent,
       GiveConsentComponent
   ],
   imports:[
    ConsentsRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
   ]
})

export class ConsentsModule { }
