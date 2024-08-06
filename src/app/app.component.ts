import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { PlacesComponent } from './places/places.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, PlacesComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'dung-project';
}
