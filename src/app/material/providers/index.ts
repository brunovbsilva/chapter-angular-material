import { MAT_CHECKBOX_DEFAULT_OPTIONS } from "@angular/material/checkbox";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from "@angular/material/form-field";
import { MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS } from "@angular/material/slide-toggle";

const matFormFieldDefaultOptions: MatFormFieldDefaultOptions = {
    appearance: 'outline',
    color: 'primary',
    floatLabel: 'auto',
    subscriptSizing: 'fixed'
};

export const MaterialProviders = [
    // { provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { color: 'primary' }},
    // { provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, useValue: { color: 'primary' }},
    // { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: matFormFieldDefaultOptions },
]