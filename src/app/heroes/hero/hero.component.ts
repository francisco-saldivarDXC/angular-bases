import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name : string = "Batman";
  public age : number = 35;
  public showChangeName : boolean = true;
  public showChangeAge : boolean = true;


  get capitalizeName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription() : string {
    return `${this.name} - ${this.age}`;
  }

  changeName() : void {
    this.name = "Superman";
    this.showChangeName = false;
  }

  changeAge() : void {
    this.age = 45
    this.showChangeAge = false;
  }

  resetForm() : void {
    this.age = 35;
    this.name = "Batman";
    this.showChangeAge = true;
    this.showChangeName = true
  }
}
