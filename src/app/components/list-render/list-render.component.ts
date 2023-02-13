import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    { name: 'Turca', type: 'Horse' },
    { name: 'Tom', type: 'Dog' },
    { name: 'Frida', type: 'Cat' },
    { name: 'Bob', type: 'Dog' }
  ];
}
