import { Component, OnInit } from '@angular/core';
import { SayService } from "../serve/say.service.ts";
@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  constructor(private say:SayService) { }

  ngOnInit() {
  	this.say.sayhi();
  }

}
