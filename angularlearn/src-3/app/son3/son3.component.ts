import { Component, OnInit } from '@angular/core';
import { SendmsgService } from '../service/sendmsg.service'

@Component({
	selector: 'app-son3',
	templateUrl: './son3.component.html',
	styleUrls: ['./son3.component.css']
})
export class Son3Component implements OnInit {
	msg = "";
	constructor(private send: SendmsgService) {}

	ngOnInit() {
		this.send.objarr.push(this);
	}

}