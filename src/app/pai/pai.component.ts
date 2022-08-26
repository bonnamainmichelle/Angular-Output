import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css'],
})
export class PaiComponent implements OnInit {
  public _myNumber: number = 0;
  constructor() {}

  ngOnInit() {}
  onChangeNumber() {
    //Pai pega o evento do ar que o filho enviou
    this._myNumber = Math.floor(Math.random() * 10);

  }
}
