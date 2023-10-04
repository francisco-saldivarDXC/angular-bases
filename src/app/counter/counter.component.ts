import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy (number: number) : void {
    this.counter += number;
  }

  reset () : void {
    this.counter = 0;
  }
}

