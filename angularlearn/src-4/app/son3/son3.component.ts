import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../service/subscribe.service';


@Component({
  selector: 'app-son3',
  templateUrl: './son3.component.html',
  styleUrls: ['./son3.component.css']
})
export class Son3Component implements OnInit {

  constructor(private sub:SubscribeService) { }

  ngOnInit() {
  	this.sub.subscribe(
			(msg) => {
				this.msg = msg;
			}
		)
  }

}
