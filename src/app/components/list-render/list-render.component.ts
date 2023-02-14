import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  animals: Animal[] = [];

  animalDetails = '';

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos.`;
  }

  removeAnimal(animal: Animal) : void {
    // this.animals = this.listService.remove(this.animals, animal);
    // console.log("Removendo animal...");
    this.animals = this.animals.filter(a => a.name !== animal.name);
    this.listService.remove(animal.id).subscribe();
  }
}
