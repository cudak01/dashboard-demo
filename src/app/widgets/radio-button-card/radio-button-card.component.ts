import {Component, Input, OnInit} from '@angular/core';
import {RadioCardEntry} from "../../models/radio-card-entry";

@Component({
  selector: 'app-radio-button-card',
  templateUrl: './radio-button-card.component.html',
  styleUrls: ['./radio-button-card.component.css']
})
export class RadioButtonCardComponent implements OnInit {

  @Input()
  data:RadioCardEntry;

  ngOnInit(): void {
  }

}
