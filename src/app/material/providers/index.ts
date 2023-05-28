import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from "@angular/material/form-field";

const matFormFieldDefaultOptions: MatFormFieldDefaultOptions = {
    appearance: 'outline',
    color: 'primary',
    floatLabel: 'always',
    subscriptSizing: 'fixed'
}

export const MaterialProviders = [
    // { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: matFormFieldDefaultOptions },
]