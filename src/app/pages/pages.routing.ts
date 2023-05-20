import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { InputsComponent } from "./inputs/inputs.component";
import { SelectsComponent } from "./selects/selects.component";
import { CalendarsComponent } from "./calendars/calendars.component";

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'inputs', component: InputsComponent },
    { path: 'selects', component: SelectsComponent },
    { path: 'calendars', component: CalendarsComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}