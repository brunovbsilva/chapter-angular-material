import { TestBed } from '@angular/core/testing';
import { OpenUIDirective } from './open-ui.directive';
import { MatSelect } from '@angular/material/select';
import { ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

describe('OpenUIDirective', () => {
  let directive: OpenUIDirective;
  let matSelectSpy: { open: jasmine.Spy, options: { toArray: jasmine.SpyObj<number[]> }, multiple: jasmine.Spy, placeholder: jasmine.Spy};
  let elRefSpy: { nativeElement: jasmine.Spy };
  let matDialogSpy: { open: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: MatSelect, useValue: matSelectSpy },
        { provide: ElementRef, useValue: elRefSpy },
        { provide: MatDialog, useValue: matDialogSpy }
      ]
    });
    matSelectSpy = jasmine.createSpyObj('MatSelect', ['open', 'options', 'multiple', 'placeholder']);
    elRefSpy = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    directive = new OpenUIDirective(matSelectSpy as any, elRefSpy as any, matDialogSpy as any);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
