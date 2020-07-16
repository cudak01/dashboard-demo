import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {MenuEntry} from "../../models/menu-entry";

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Input()
  entries:MenuEntry[];

  @Input()
  title:string;

  @Input()
  isRoot:boolean=false;

  ngOnInit(): void {
  }

  asIs(a, b) {
    return a;
  }

}
