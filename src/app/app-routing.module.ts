import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileInformationComponent} from "./views/profile-information/profile-information.component";
import {HomeComponent} from "./views/home/home.component";
import {OrganisationInformationComponent} from "./views/organisation-information/organisation-information.component";
import {CrmConnectionsComponent} from "./views/crm-connections/crm-connections.component";
import {SnapaddyGlobalSettingsComponent} from "./views/snapaddy-global-settings/snapaddy-global-settings.component";
import {TwoFaConfigComponent} from "./views/two-fa-config/two-fa-config.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile-information', component: ProfileInformationComponent},
  {path: 'organisation-information', component: OrganisationInformationComponent},
  {path: 'crm-connections', component: CrmConnectionsComponent},
  {path: 'snapaddy-global-settings', component: SnapaddyGlobalSettingsComponent},
  {path: '2fa-config', component: TwoFaConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
