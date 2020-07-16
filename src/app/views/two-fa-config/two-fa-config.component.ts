import { Component, OnInit } from '@angular/core';
import {MenuEntry} from "../../models/menu-entry";
import {InputData} from "../../models/input-data";

@Component({
  selector: 'two-fa-config',
  templateUrl: './two-fa-config.component.html',
  styleUrls: ['./two-fa-config.component.css']
})
export class TwoFaConfigComponent implements OnInit {

  menu: MenuEntry[] = [
    {
      label: 'Profilinformationen',
      route: 'profile-information'
    },
    {
      label: 'Assistenz',
      route: 'assistence'
    },
    {
      label: 'API-Token',
      route: 'api-token'
    },
    {
      label: 'Password ändern',
      route: 'change-password'
    },{
      label: 'Zwei-Faktor-Authentifizierung',
      route: '2fa-config',
      active: true
    },{
      label: 'Support und Chat',
      route: 'support'
    },
  ];

  inputs: InputData[] = [
    {
      label: 'Zwei-Faktor-Token',
      identifier: 'token'
    }
  ];

  ngOnInit(): void {
  }

}
