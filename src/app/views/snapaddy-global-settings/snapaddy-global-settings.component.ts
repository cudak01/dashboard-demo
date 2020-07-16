import { Component, OnInit } from '@angular/core';
import {MenuEntry} from "../../models/menu-entry";
import {CheckboxEntry} from "../../models/checkbox-entry";

@Component({
  selector: 'app-snapaddy-global-settings',
  templateUrl: './snapaddy-global-settings.component.html',
  styleUrls: ['./snapaddy-global-settings.component.css']
})
export class SnapaddyGlobalSettingsComponent implements OnInit {

  general_items: CheckboxEntry[] = [
    {
      id: 'contact',
      label: 'Kontaktvorschläge aus E-Mails aktiviert',
      checked: true
    },
    {
      id: 'mail',
      label: 'Keine Einladungs-E-Mail versenden (Empfohlen falls der Login via Username und Passwort verboten ist)'
    },
  ];

  login_items: CheckboxEntry[] = [
    {
      id: 'log_user',
      label: 'Login via Username & Passwort erlauben',
      checked: true
    },
    {
      id: 'log_mic',
      label: 'Login via Microsoft Single Sign-On erlauben',
      checked: true
    },
    {
      id: 'log_google',
      label: ' Login via Google Single Sign-On erlauben',
      checked: true
    },
    {
      id: 'log_apple',
      label: ' Login via Apple Single Sign-On erlauben'
    },
  ];

  menu: MenuEntry[] = [
    {
      label: 'Firmen-Stammdaten',
      route: 'organisation-information'
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
      route: 'snapaddy-global-settings',
      active: true
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

  ngOnInit(): void {
  }

}
