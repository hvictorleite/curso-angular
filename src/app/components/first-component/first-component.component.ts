import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Matheus';
  age: number = 25;
  job: string = 'Programador';
  hobbies: string[] = ['Correr', 'Jogar', 'Estudar'];
  car = {
    name: 'Polo',
    year: '2019'
  };
}
