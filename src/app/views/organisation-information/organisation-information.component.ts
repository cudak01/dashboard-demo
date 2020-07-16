import {Component, OnInit} from '@angular/core';
import {MenuEntry} from "../../models/menu-entry";
import {InputData} from "../../models/input-data";

@Component({
  selector: 'organisation-information',
  templateUrl: './organisation-information.component.html',
  styleUrls: ['./organisation-information.component.css']
})
export class OrganisationInformationComponent implements OnInit {

  menu: MenuEntry[] = [
    {
      label: 'Firmen-Stammdaten',
      route: 'organisation-information',
      active: true
    },
    {
      label: 'E-Mail-Einstellungen',
      route: 'mail-settings'
    },
    {
      label: 'Firmen-Einstellungen',
      isSubhead: true
    },
    {
      label: 'snapADDY zentral',
      route: 'snapaddy-global-settings'
    },
    {
      label: 'snapADDY Grabber',
      route: 'grabber-settings'
    },
    {
      label: 'snapADDY VisitReport',
      route: 'visitreport-settings'
    },
    {
      label: 'Integrationseinstellungen',
      route: 'integration-settings'
    },
    {
      label: 'Benutzerverwaltung',
      isSubhead: true
    },
    {
      label: 'Nutzer verwalten',
      route: 'manage-user'
    },
    {
      label: 'Profilfelder verwalten',
      route: 'manage-fields'
    },
    {
      label: 'Benutzergruppen verwalten',
      route: 'manage-groups'
    },
    {
      label: 'Terminals verwalten',
      route: 'manage-terminals'
    },
  ];

  organisationInputs: InputData[] = [
    {
      label: 'Name',
      identifier: 'name',
      mandatory: true
    },
    {
      label: 'Straße',
      identifier: 'forename',
      mandatory: true
    },
    {
      label: 'PLZ',
      identifier: 'zip',
      mandatory: true,
      inputType: 'number'
    },
    {
      label: 'Straße',
      identifier: 'street',
      mandatory: true
    },
    {
      label: 'Land',
      identifier: 'country',
      mandatory: true
    },
    {
      label: 'Ust-IdNr.',
      identifier: 'tax-id',
      inputType: 'number'
    },
  ];

  contactInputs: InputData[] = [
    {
      label: 'Anrede',
      identifier: 'gender'
    },
    {
      label: 'Vorname',
      identifier: 'forename',
    },
    {
      label: 'Nachname',
      identifier: 'surname',
    },
    {
      label: 'E-Mail-Adresse',
      identifier: 'mail-adress',
      mandatory: true,
      inputType: 'email'
    },
    {
      label: 'Telefon',
      identifier: 'tel',
      inputType: 'number',
      mandatory: true
    },
    {
      label: 'Mobil',
      identifier: 'mobile',
      inputType: 'number',
    },
    {
      label: 'CRM',
      identifier: 'crm',
    },
  ];

  ngOnInit(): void {
  }

}
