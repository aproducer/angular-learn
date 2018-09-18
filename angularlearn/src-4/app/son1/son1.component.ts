import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../service/subscribe.service';


@Component({
  selector: 'app-son1',
  templateUrl: './son1.component.html',
  styleUrls: ['./son1.component.css']
})
export class Son1Component implements OnInit {

  constructor(private sub:SubscribeService) { }

  ngOnInit() {
  }
  pub(pubmsg){
  	console.log(pubmsg.value);
  	this.sub.public(pubmsg.value)
  }

}
