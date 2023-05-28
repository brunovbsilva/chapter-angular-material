import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDialogComponent } from './select-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MatOption } from '@angular/material/core';
import { SelectUiFilterSearchPipe } from '../pipe/select-ui-filter-search.pipe';

class DialogRefMock {
  backdropClick() { return of(); }
  close(): void { }
}

class MatOptionMock {
  get selected(): boolean { return true; };
  select(): void {}
  deselect(): void {}
}

xdescribe('SelectDialogComponent', () => {
  let component: SelectDialogComponent;
  let dialogRef: MatDialogRef<SelectDialogComponent>;
  let fixture: ComponentFixture<SelectDialogComponent>;
  let matOption: MatOption;

  beforeEach(async () => {

    const dataMock = {
      options: [],
      placeholder: 'placeholder mock',
      multiple: true
    }

    await TestBed.configureTestingModule({
      declarations: [
        SelectDialogComponent,
        SelectUiFilterSearchPipe
      ],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatListModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: dataMock },
        { provide: MatDialogRef, useClass: DialogRefMock },
        { provide: MatOption, useClass: MatOptionMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDialogComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.inject(MatDialogRef);
    matOption = TestBed.inject(MatOption);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleSelectItem', () => {
    let matOptionMock: MatOption;
    let selectedSpy: jasmine.Spy;
    let selectSpy: jasmine.Spy;
    let deselectSpy: jasmine.Spy;

    beforeEach(() => {
      selectSpy = spyOn(matOption, 'select');
      deselectSpy = spyOn(matOption, 'deselect');
    });

    it('should add item to selectedItems', () => {
      selectedSpy = spyOnProperty(matOption, 'selected', 'get').and.returnValue(true);
      component.toggleSelectItem(matOptionMock);
    });

    xit('should remove item from selectedItems', () => {
      component.toggleSelectItem(matOptionMock);
    });
  });
});
