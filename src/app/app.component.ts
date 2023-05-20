import { AfterViewInit, Component } from '@angular/core';
import { ThemeService } from './core/themes/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private themeService: ThemeService) {}

  ngAfterViewInit(): void {
    this.themeService.updateTheme();
  }
}
