import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { PagesRoutingModule } from "./pages.routing";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        PagesRoutingModule
    ]
})
export class PagesModule {}