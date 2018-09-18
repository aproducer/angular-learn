import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() { }
  funarr=[];
  public(msg){
  	console.log(msg,this.funarr)
  	for (let i of this.funarr) {
  		i(msg);
  	}
  }
  
  subscribe(fun){
  	this.funarr.push(fun);
  }
}
