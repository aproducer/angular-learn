import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SonComponent } from './son/son.component';
import { SayService } from "./serve/say.service.ts";

@NgModule({
	declarations: [
		AppComponent,
		TemplateformComponent,
		ReactiveformComponent,
		SonComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [SayService],
	bootstrap: [AppComponent]
})
export class AppModule {}