import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SendmsgService {

	constructor() {}

	fun = null;
	objarr = [];
	publish(msg) {
		console.log(this.objarr);
		for (let i of this.objarr) {
			i.msg=msg;
		}
	}
	//resivefrom1(fun){
	//	this.fun=fun;
	//}
	subscribe(){
		
	}
	

}