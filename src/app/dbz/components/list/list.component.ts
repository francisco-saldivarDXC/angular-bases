import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  onDelete : EventEmitter<number> = new EventEmitter();

  //Recibir elementos de otro componente
  @Input()
  public characterList : Character[] = [
    {
      name: "Krillin",
      power: 200
    }
  ];

  deleteCharacter(id : number): void {
    this.onDelete.emit(id);
  }
}
