import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderDesktopComponent } from './components/desktop/header-desktop/header-desktop.component';
import { GuestButtonsDesktopComponent } from './components/desktop/button_sets_desktop/guest-buttons-desktop/guest-buttons-desktop.component';
import { ViewDesktopComponent } from './components/views/view-desktop/view-desktop.component';
import { ViewMobileComponent } from './components/views/view-mobile/view-mobile.component';
import { HeaderMobileComponent } from './components/mobile/header-mobile/header-mobile.component';
import { GuestButtonsMobileComponent } from './components/mobile/button_sets_mobile/guest-buttons-mobile/guest-buttons-mobile.component';
import { HomeComponent } from './components/mobile/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderDesktopComponent,
    GuestButtonsDesktopComponent,
    ViewDesktopComponent,
    ViewMobileComponent,
    HeaderMobileComponent,
    GuestButtonsMobileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
