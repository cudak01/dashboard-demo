import {Component, Input, OnInit} from '@angular/core';
import {InputData} from "../../models/input-data";
import {MenuEntry} from "../../models/menu-entry";

@Component({
  selector: 'profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit {

  ngOnInit(): void {
  }

  menu: MenuEntry[] = [
    {
      label: 'Profilinformationen',
      route: 'profile-information',
      active: true
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
      route: '2fa-config'
    },{
      label: 'Support und Chat',
      route: 'support'
    },
  ];

  inputs: InputData[] = [
    {
      label: 'Anrede',
      identifier: 'gender'
    },
    {
      label: 'Vorname',
      identifier: 'forename',
      mandatory: true
    },
    {
      label: 'Nachname',
      identifier: 'surname',
      mandatory: true
    },
    {
      label: 'Telefon',
      identifier: 'tel',
      inputType: 'number'
    },
  ];
}
