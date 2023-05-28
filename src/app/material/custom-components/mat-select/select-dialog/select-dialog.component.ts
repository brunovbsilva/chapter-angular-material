import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SelectDialogData } from '../models/select-dialog-data.model';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.scss']
})
export class SelectDialogComponent implements OnInit, AfterViewInit {

  public selectAll: boolean = false;
  public indeterminated: boolean = false;
  
  constructor(
    public dialogRef: MatDialogRef<SelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectDialogData
  ) {}

  ngOnInit(): void {
    this.checkSelectAllState();
  }

  private checkSelectAllState() {
    const selected = this.data.options.filter(v => v.selected).length;
    const all = this.data.options.length;
    
    if(selected == all){
      this.selectAll = true;
      this.indeterminated = false;
    }
    else {
      this.selectAll = false
      this.indeterminated = selected != 0;
    }
  }

  ngAfterViewInit(): void {
    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close();
    });
  }

  public toggleSelectItem(value: MatOption): void {
    if(this.data.multiple) {
      !value.selected ? value.select() : value.deselect();
      this.checkSelectAllState();
    }
    else {
      if(!value.selected) value.select();
      this.dialogRef.close();
    }
  }

  public toggleSelectAll() {
    this.data.options.filter(x => x.selected == this.selectAll).forEach(x => {
      this.selectAll ? x.deselect() : x.select();
    });
    this.checkSelectAllState();
  }

}
