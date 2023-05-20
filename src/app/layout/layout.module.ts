import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from './layout.component';
import { MaterialModule } from "../material/material.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        SharedModule
    ],
    declarations: [
      LayoutComponent
    ]
})
export class LayoutModule {}