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
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { UpdateCatalogComponent } from './components/desktop/update-catalog/update-catalog.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EyeGlassesMobileComponent } from './components/catalogs/eye-glasses-mobile/eye-glasses-mobile.component';
import { ReloadCompComponent } from './components/reload-comp/reload-comp.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'eye-glasses-mobile', component: EyeGlassesMobileComponent },
    { path: 'update-catalog', component: UpdateCatalogComponent },
    { path: 'reload', component: ReloadCompComponent },
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
    ContactUsComponent,
    UpdateCatalogComponent,
    LoginComponent,
    LogoutComponent,
    ReloadCompComponent,
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

