import { Injectable } from '@angular/core';
import { Character } from '../dbz/interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzCharactersService {
  public characters : Character[] = [
    {
      name: "Goku",
      power: 1000
    },
    {
      name: "Vegeta",
      power: 900
    }
  ];

  insertCharacter(character : Character) : void {
    this.characters.push({...character});
  }

  deleteItem(id: number) : void {
    this.characters.splice(id, 1);
  }

  get charactersArray() : Character[] {
    return this.characters;
  }

  constructor() { }

}
