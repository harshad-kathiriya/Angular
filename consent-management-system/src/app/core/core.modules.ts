import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { ButtonComponent } from "./controls/button/button.component";

@NgModule({
    declarations: [
        SideNavComponent,
        ButtonComponent
    ],
    imports:[
        FormsModule,
        RouterModule
    ],
    exports: [
        SideNavComponent,
        ButtonComponent
    ]
})

export class CoreModule {}