import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
	selector: 'app-reactiveform',
	templateUrl: './reactiveform.component.html',
	styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
	user = null;
	constructor() {
		this.user = new FormGroup({
			username: new FormControl('', [Validators.required, Validators.minLength(4)])
		});
	}

	ngOnInit() {}

}