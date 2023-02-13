import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Turca', type: 'Horse', age: 4 },
    { name: 'Tom', type: 'Dog', age: 8 },
    { name: 'Frida', type: 'Cat', age: 5 },
    { name: 'Bob', type: 'Dog', age: 2 }
  ];

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos.`;
  }
}
