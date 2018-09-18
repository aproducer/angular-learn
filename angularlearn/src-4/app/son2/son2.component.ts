import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../service/subscribe.service';

@Component({
	selector: 'app-son2',
	templateUrl: './son2.component.html',
	styleUrls: ['./son2.component.css']
})
export class Son2Component implements OnInit {
	msg = "";
	constructor(private sub: SubscribeService) {}

	ngOnInit() {
		this.sub.subscribe(
			(msg) => {
				this.msg = msg;
			}
		)
	}

}