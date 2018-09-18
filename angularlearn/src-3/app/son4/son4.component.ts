import { Component, OnInit } from '@angular/core';
import { SendmsgService } from '../service/sendmsg.service'

@Component({
	selector: 'app-son4',
	templateUrl: './son4.component.html',
	styleUrls: ['./son4.component.css']
})
export class Son4Component implements OnInit {
	msg = "";
	constructor(private send: SendmsgService) {}

	ngOnInit() {
		this.send.objarr.push(this);
	}

}