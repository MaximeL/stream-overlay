import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.sass']
})
export class ShadowComponent implements OnInit {

  constructor() { }

  shadowLogo = '../../assets/images/Vertical_Dark.png';

  ngOnInit() {
  }

}
