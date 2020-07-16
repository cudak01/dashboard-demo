import {Component, Input, OnInit} from '@angular/core';
import {InputData} from "../../models/input-data";

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input()
  data:InputData;

  ngOnInit(): void {
  }

}
