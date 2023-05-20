import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

const themeLS = 'theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  getTheme() {
    const defaultTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return localStorage.getItem(themeLS) || defaultTheme;
  }

  setTheme(theme: string) {
    this.removeTheme();
    localStorage.setItem(themeLS, theme);
    this.updateTheme();
  }

  removeTheme() {
    this.document.body.classList.remove(this.getTheme());
    localStorage.removeItem(themeLS);
  }

  updateTheme() {
    this.document.body.classList.add(this.getTheme());
  }
}
