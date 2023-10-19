import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzCharactersService } from '../../services/dbz-characters.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  constructor( private dbzService : DbzCharactersService) {

  }

  deleteItem(id : number) : void {
    this.dbzService.deleteItem(id);
  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  insertCharacter(character : Character) : void {
    this.dbzService.insertCharacter(character);
  }
}
