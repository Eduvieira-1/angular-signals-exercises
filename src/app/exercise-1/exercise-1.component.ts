import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-exercise-1',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './exercise-1.component.html',
  styleUrl: './exercise-1.component.scss'
})
export class Exercise1Component {

  count = signal(0);

  increase(){
    this.count.set(this.count() + 1);
  }

  doubleValue(){
    this.count.update((value) => value * 2)
  }

  reset(){
    this.count.set(0)
  }

}
