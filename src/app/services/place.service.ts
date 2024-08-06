import { Injectable } from '@angular/core';

import { Place } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  getPlaces(): Place[] {
    let items: Place[] = [];
    // for (let i = 0; i < 6; i++) {
    //   items.push({
    //     name: `Toronto ${i}`,
    //     price: 120 * (i + 1),
    //     properties: 10 * (i + 1),
    //     image: 'https://placehold.co/512',
    //   });
    // }
    items = [
      {
        name: 'Toronto',
        price: 120,
        properties: 76,
        image: '/img/toronto.jpg',
      },
      {
        name: 'Malibu',
        price: 215,
        properties: 43,
        image: '/img/malibu.jpg',
      },
      {
        name: 'Chicago',
        price: 130,
        properties: 115,
        image: '/img/chicago.jpg',
      },
      {
        name: 'Seattle',
        price: 135,
        properties: 63,
        image: '/img/seattle.jpg',
      },
      {
        name: 'Colorado',
        price: 85,
        properties: 47,
        image: '/img/colorado.jpg',
      },
      {
        name: 'Miami',
        price: 112,
        properties: 86,
        image: '/img/miami.jpg',
      },
    ];
    return items;
  }
}
