import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css'],
})
export class DialogWindowComponent implements OnInit {
  actualDate: Date;

  constructor() {}

  ngOnInit(): void {
    this.actualDate = new Date();
  }
}
