import { Component, OnInit } from '@angular/core';
import { SendmsgService } from '../service/sendmsg.service'

@Component({
	selector: 'app-son2',
	templateUrl: './son2.component.html',
	styleUrls: ['./son2.component.css']
})
export class Son2Component implements OnInit {

	constructor(private send: SendmsgService) {}
	msg = "";
	ngOnInit() {
		this.send.objarr.push(this);
		//	this.send.resivefrom1(this.recive.bind(this));
		//	this.send.resivefrom1(this.recive2())
	}
	//recive(msg){
	//	this.msgInSon2=msg;
	//}
	//
	//recive2(){
	//	var self=this;
	//	function change(msg){
	//		self.msgInSon2=msg;
	//	}
	//	return change;
	//}

}