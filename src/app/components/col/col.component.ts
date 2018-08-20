import { Component, OnInit, Input } from '@angular/core';
import { Col } from './col';

@Component({
  selector: 'app-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss']
})
export class ColComponent implements OnInit {
  @Input() span: Col;

  constructor() { }

  ngOnInit() {
  }

}
