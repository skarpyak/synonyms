import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-button',
  templateUrl: './ng-button.component.html',
  styleUrls: ['./ng-button.component.scss']
})
export class NgButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  onClick() {
    alert('click')
  }
}
