import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './widgets/side-menu/side-menu.component';
import { MenuButtonComponent } from './widgets/menu-button/menu-button.component';
import { InformationOverviewComponent } from './views/information-overview/information-overview.component';
import { ProfileInformationComponent } from './views/profile-information/profile-information.component';
import { HomeComponent } from './views/home/home.component';
import { InputFieldComponent } from './widgets/input-field/input-field.component';
import { OrganisationInformationComponent } from './views/organisation-information/organisation-information.component';
import { RadioButtonCardComponent } from './widgets/radio-button-card/radio-button-card.component';
import { CrmConnectionsComponent } from './views/crm-connections/crm-connections.component';
import { NavbarComponent } from './widgets/navbar/navbar.component';
import { CheckboxItemComponent } from './widgets/checkbox-item/checkbox-item.component';
import { SnapaddyGlobalSettingsComponent } from './views/snapaddy-global-settings/snapaddy-global-settings.component';
import { TwoFaConfigComponent } from './views/two-fa-config/two-fa-config.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MenuButtonComponent,
    InformationOverviewComponent,
    ProfileInformationComponent,
    HomeComponent,
    InputFieldComponent,
    OrganisationInformationComponent,
    RadioButtonCardComponent,
    CrmConnectionsComponent,
    NavbarComponent,
    CheckboxItemComponent,
    SnapaddyGlobalSettingsComponent,
    TwoFaConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
