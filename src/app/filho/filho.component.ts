import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css'],
})
export class FilhoComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  handerClick() {
    this.changeNumber.emit(); //mandando para o ar, só que o pai pega esse evento
  }
}
