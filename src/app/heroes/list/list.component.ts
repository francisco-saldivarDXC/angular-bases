import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes : string[] = ['Hulk', 'Thor', 'Irnonman', 'Spiderman', 'Antman'];
  public deletedItem ?: string;

  deleteItem() : void {
    this.deletedItem = this.heroes.pop();
  }
}
