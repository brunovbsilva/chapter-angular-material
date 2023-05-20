import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { PagesRoutingModule } from "./pages.routing";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { SelectsComponent } from './selects/selects.component';
import { CalendarsComponent } from './calendars/calendars.component';
import { InputsComponent } from './inputs/inputs.component';

@NgModule({
    declarations: [
        HomeComponent,
        SelectsComponent,
        CalendarsComponent,
        InputsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        PagesRoutingModule
    ]
})
export class PagesModule {}