import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal) : Animal[] {
    return animals.filter(a => a.name !== animal.name);
  }
}
