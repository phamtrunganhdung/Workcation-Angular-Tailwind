import { Component, inject, OnInit } from '@angular/core';

import { Place } from '../models/models';
import { PlaceComponent } from '../place/place.component';
import { PlaceService } from '../services/place.service';

@Component({
  selector: '[app-places]',
  standalone: true,
  imports: [PlaceComponent],
  templateUrl: './places.component.html',
})
export class PlacesComponent implements OnInit {
  placeService = inject(PlaceService);

  items: Place[] = [];

  ngOnInit(): void {
    this.items = this.placeService.getPlaces();
  }
}
