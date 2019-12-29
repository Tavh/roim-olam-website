import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderDesktopComponent } from './components/desktop/header-desktop/header-desktop.component';
import { ButtonsDesktopComponent } from './components/desktop/button_sets_desktop/buttons-desktop/buttons-desktop.component';
import { ViewDesktopComponent } from './components/views/view-desktop/view-desktop.component';
import { ViewMobileComponent } from './components/views/view-mobile/view-mobile.component';
import { HeaderMobileComponent } from './components/mobile/header-mobile/header-mobile.component';
import { ButtonsMobileComponent } from './components/mobile/button_sets_mobile/buttons-mobile/buttons-mobile.component';
import { HomeComponent } from './components/home/home.component';
import { EyeGlassesMobileComponent } from './components/mobile/catalogs/eye-glasses-mobile/eye-glasses-mobile.component';
import { SunGlassesMobileComponent } from './components/mobile/catalogs/sun-glasses-mobile/sun-glasses-mobile.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactLensesMobileComponent } from './components/mobile/catalogs/contact-lenses-mobile/contact-lenses-mobile.component';
import { GlassLensesMobileComponent } from './components/mobile/catalogs/glass-lenses-mobile/glass-lenses-mobile.component';
import { UpdateCatalogComponent } from './components/desktop/update-catalog/update-catalog.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'eye-glasses-mobile', component: EyeGlassesMobileComponent },
    { path: 'sun-glasses-mobile', component: SunGlassesMobileComponent },
    { path: 'contact-lenses-mobile', component: ContactLensesMobileComponent },
    { path: 'glass-lenses-mobile', component: GlassLensesMobileComponent },
    { path: 'update-catalog', component: UpdateCatalogComponent },
    { path: 'login', component: LoginComponent },
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
    ButtonsDesktopComponent,
    ViewDesktopComponent,
    ViewMobileComponent,
    HeaderMobileComponent,
    ButtonsMobileComponent,
    HomeComponent,
    EyeGlassesMobileComponent,
    SunGlassesMobileComponent,
    ContactUsComponent,
    ContactLensesMobileComponent,
    GlassLensesMobileComponent,
    UpdateCatalogComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

