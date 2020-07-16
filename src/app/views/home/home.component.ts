import { Component, OnInit } from '@angular/core';
import {InputData} from "../../models/input-data";
import {MenuEntry} from "../../models/menu-entry";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  profile = {
    'Anrede': 'Herr',
    'Vorname': 'Gregor',
    'Nachname': 'Winkler',
    'Telefon': '015222404481'
  };
  organisation = {
    'Firmenname': 'Winkler',
    'Adresse': 'Straße 1',
    'Ust-IdNr.': '000000000',
    'Ansprechpartner': 'Herr Gregor Winkler',
    'Email': 'gwinkler@runbox.com',
    'Telefon': '',
    'Mobil': ''
  };
  crmConnections = {
    'Aktuelles CRM': 'Salesforce'
  };

  menu: MenuEntry[] = [
    {label: 'Profil',
    route: 'profile-information'},
    {label: 'Organisation',
      route: 'organisation-information'},
    {label: 'CRM-Verbindungen',
      route: 'crm-connections'},
  ];

  ngOnInit(): void {
  }

}
