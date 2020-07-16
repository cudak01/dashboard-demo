import {Component, Input, OnInit} from '@angular/core';
import {CheckboxEntry} from "../../models/checkbox-entry";

@Component({
  selector: 'checkbox-item',
  templateUrl: './checkbox-item.component.html',
  styleUrls: ['./checkbox-item.component.css']
})
export class CheckboxItemComponent implements OnInit {

  @Input()
  data:CheckboxEntry;

  ngOnInit(): void {
  }

}
