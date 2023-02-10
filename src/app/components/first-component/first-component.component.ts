import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Victor';
  age: number = 23;
  job: string = 'Desenvolvedor';
  hobbies: string[] = ['Tocar música', 'Jogar', 'Estudar'];
  car = {
    name: 'Pálio',
    year: '1996'
  };
}
