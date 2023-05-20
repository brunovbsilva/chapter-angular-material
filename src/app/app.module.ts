import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { MaterialProviders } from './material/providers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    PagesModule,
    SharedModule
  ],
  exports: [
    MaterialModule,
    SharedModule
  ],
  providers: [
    MaterialProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
