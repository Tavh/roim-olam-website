import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderDesktopComponent } from './components/desktop/header-desktop/header-desktop.component';
import { GuestButtonsDesktopComponent } from './components/desktop/button_sets_desktop/guest-buttons-desktop/guest-buttons-desktop.component';
import { ViewDesktopComponent } from './components/views/view-desktop/view-desktop.component';
import { ViewMobileComponent } from './components/views/view-mobile/view-mobile.component';
import { HeaderMobileComponent } from './components/mobile/header-mobile/header-mobile.component';
import { GuestButtonsMobileComponent } from './components/mobile/button_sets_mobile/guest-buttons-mobile/guest-buttons-mobile.component';
import { HomeComponent } from './components/mobile/home/home.component';
import { EyeGlassesMobileComponent } from './components/mobile/catalogs/eye-glasses-mobile/eye-glasses-mobile.component';
import { SunGlassesMobileComponent } from './components/mobile/catalogs/sun-glasses-mobile/sun-glasses-mobile.component';
import { ContactUsMobileComponent } from './components/mobile/contact-us-mobile/contact-us-mobile.component';
import { ContactLensesMobileComponent } from './components/mobile/catalogs/contact-lenses-mobile/contact-lenses-mobile.component';
import { GlassLensesMobileComponent } from './components/mobile/catalogs/glass-lenses-mobile/glass-lenses-mobile.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact-us-mobile', component: ContactUsMobileComponent },
    { path: 'eye-glasses-mobile', component: EyeGlassesMobileComponent },
    { path: 'sun-glasses-mobile', component: SunGlassesMobileComponent },
    { path: 'contact-lenses-mobile', component: ContactLensesMobileComponent },
    { path: 'glass-lenses-mobile', component: GlassLensesMobileComponent },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ];

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
    HomeComponent,
    EyeGlassesMobileComponent,
    SunGlassesMobileComponent,
    ContactUsMobileComponent,
    ContactLensesMobileComponent,
    GlassLensesMobileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
