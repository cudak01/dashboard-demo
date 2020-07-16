import { Component, OnInit } from '@angular/core';
import {MenuEntry} from "../../models/menu-entry";
import {RadioCardEntry} from "../../models/radio-card-entry";

@Component({
  selector: 'app-crm-settings',
  templateUrl: './crm-connections.component.html',
  styleUrls: ['./crm-connections.component.css']
})
export class CrmConnectionsComponent implements OnInit {

  ngOnInit(): void {
  }

  menu: MenuEntry[] = [
    {
      label: 'CRM-Verbindungen',
      route: 'crm-connections',
      active: true
    }
  ];

  crm_options: RadioCardEntry[] = [
    {
      label: 'Salesforce',
      btnLabel: 'Mit Salesforce verbunden',
      description: 'Verbindung mit den Salesforce CRM herstellen.',
      active: true
    },
    {
      label: 'Dynamics CRM 365',
      btnLabel: 'Mit Dynamics CRM 365 verbunden'
    },
    {
      label: 'Pipedrive',
      btnLabel: 'Mit Pipedrive verbunden'
    },
    {
      label: 'SAP C/4Hana',
      btnLabel: 'Jetzt installieren',
      description: 'Bitte installieren Sie den snapADDY VisitReport CRM Helper um sich mit Ihrem CRM zu verbinden. '
    },
  ]
}
