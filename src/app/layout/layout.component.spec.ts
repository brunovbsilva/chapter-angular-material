import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from '../core/themes/theme.service';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let themeService: ThemeService;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LayoutComponent
      ],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule
      ],
      providers: [
        { provide: ThemeService, useValue: jasmine.createSpyObj('ThemeService', ['getTheme', 'setTheme']) }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    themeService = TestBed.inject(ThemeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onDarkModeSwitched', () => {
    it('should set theme to dark', () => {
      const mockMatSlideToggleChange = { checked: true } as MatSlideToggleChange;
      component.onDarkModeSwitched(mockMatSlideToggleChange);
      expect(themeService.setTheme).toHaveBeenCalledWith('dark');
    });
  
    it('should set theme to light', () => {
      const mockMatSlideToggleChange = { checked: false } as MatSlideToggleChange;
      component.onDarkModeSwitched(mockMatSlideToggleChange);
      expect(themeService.setTheme).toHaveBeenCalledWith('light');
    });
  });
});
