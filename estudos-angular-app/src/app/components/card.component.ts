import { Component } from '@angular/core';

const newLocal = 'card';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class Card {
  getAlert() {
    alert('Evandro');
  }
}
