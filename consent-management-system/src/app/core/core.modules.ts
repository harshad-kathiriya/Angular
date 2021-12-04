import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { ButtonComponent } from "./controls/button/button.component";

@NgModule({
    declarations: [
        SideNavComponent,
        ButtonComponent,
        PaginationComponent
    ],
    imports:[
        FormsModule,
        RouterModule,
        CommonModule,
        MatButtonModule
    ],
    exports: [
        SideNavComponent,
        ButtonComponent,
        PaginationComponent
    ]
})

export class CoreModule {}