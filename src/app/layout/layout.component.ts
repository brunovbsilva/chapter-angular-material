import { Component } from '@angular/core';
import { ThemeService } from '../core/themes/theme.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  isChecked: boolean;

  constructor(private themeService: ThemeService) {
    this.isChecked = themeService.getTheme() == 'dark';
  }

  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    const theme = checked ? 'dark' : 'light';
    this.themeService.setTheme(theme);
  }
}
