import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'information-overview',
  templateUrl: './information-overview.component.html',
  styleUrls: ['./information-overview.component.css']
})
export class InformationOverviewComponent implements OnInit {

  @Input()
  data: object;

  @Input()
  title: string;

  @Input()
  route: string;

  ngOnInit(): void {
  }

  asIs(a, b) {
    return a;
  }
}
