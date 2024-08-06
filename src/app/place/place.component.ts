import { Component, Input } from '@angular/core';

import { Place } from '../models/models';

@Component({
  selector: '[app-place]',
  standalone: true,
  imports: [],
  templateUrl: './place.component.html',
  host: {
    class: 'mt-6 w-full px-4 lg:w-1/2 xl:w-1/3',
  },
})
export class PlaceComponent {
  // item: Place = {
  //   name: 'Toronto',
  //   price: 120,
  //   properties: 60,
  //   image: 'https://placehold.co/512',
  // };
  @Input() item!: Place;
}
