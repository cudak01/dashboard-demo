import {Component, Input, OnInit} from '@angular/core';
import {MenuEntry} from "../../models/menu-entry";

@Component({
  selector: 'menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {

  @Input()
  data:MenuEntry;

  ngOnInit(): void {
  }

}
