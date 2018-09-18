import { Component, OnInit } from '@angular/core';
import { SendmsgService } from '../service/sendmsg.service'

@Component({
	selector: 'app-son1',
	templateUrl: './son1.component.html',
	styleUrls: ['./son1.component.css']
})
export class Son1Component implements OnInit {

	constructor(private send: SendmsgService) {}
	msg="";
	ngOnInit() {
		
	}
	oc(){
		this.send.publish(this.msg);
	}

}