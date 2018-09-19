import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { mainrouter } from './router/index';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoComponent } from './video/video.component';
import { CinemaComponent } from './cinema/cinema.component';
import { ShopComponent } from './shop/shop.component';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './card/card.component';
import { NowPlayingComponent } from './video/now-playing/now-playing.component';
import { ComingSoonComponent } from './video/coming-soon/coming-soon.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		VideoComponent,
		CinemaComponent,
		ShopComponent,
		ProfileComponent,
		CardComponent,
		NowPlayingComponent,
		ComingSoonComponent
	],
	imports: [
		BrowserModule,
		mainrouter
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}