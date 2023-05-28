import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { SelectDialogComponent } from '../select-dialog/select-dialog.component';

@Directive({
  selector: '[openUI]'
})
export class OpenUIDirective {

  private isDialogOpen: boolean = false;

  constructor(
    private matSelect: MatSelect,
    private elRef: ElementRef,
    private dialog: MatDialog
  ) { }

  ngAfterViewInit(): void {
    this.matSelect.open = () => {
      if(!this.isDialogOpen) {
        this.isDialogOpen = true;
        this.openSelectDialog();
        this.elRef.nativeElement.dispatchEvent(new Event('click'));
      }
    }
  }

  openSelectDialog(): void {
    const dialogRef = this.dialog.open(SelectDialogComponent, {
      width: '400px',
      data: {
        options: this.matSelect.options.toArray(),
        placeholder: this.matSelect.placeholder,
        multiple: this.matSelect.multiple
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.isDialogOpen = false;
    })
  }


}
