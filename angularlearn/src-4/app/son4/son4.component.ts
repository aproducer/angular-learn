import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../service/subscribe.service';


@Component({
  selector: 'app-son4',
  templateUrl: './son4.component.html',
  styleUrls: ['./son4.component.css']
})
export class Son4Component implements OnInit {

  constructor(private sub:SubscribeService) { }

  ngOnInit() {
  	this.sub.subscribe(
			(msg) => {
				this.msg = msg;
			}
		)
  }

}
