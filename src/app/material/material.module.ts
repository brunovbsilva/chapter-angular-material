import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { A11yModule } from "@angular/cdk/a11y";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OpenUIDirective } from './custom-components/mat-select/directives/open-ui.directive';
import { SelectDialogComponent } from './custom-components/mat-select/select-dialog/select-dialog.component';
import { SelectUiFilterSearchPipe } from './custom-components/mat-select/pipe/select-ui-filter-search.pipe';

@NgModule({
    imports: [
        CommonModule,
        A11yModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSlideToggleModule,
        MatCheckboxModule
    ],
    exports: [
        A11yModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSlideToggleModule,
        SelectDialogComponent,
        SelectUiFilterSearchPipe,
        OpenUIDirective
    ],
    declarations: [
        SelectDialogComponent,
        SelectUiFilterSearchPipe,
        OpenUIDirective
    ]
})
export class MaterialModule {}