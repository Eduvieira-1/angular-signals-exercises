import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-exercise-2',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './exercise-2.component.html',
  styleUrl: './exercise-2.component.scss'
})
export class Exercise2Component {

  originalPrice = signal(100);

  discount = signal(10);

  finalPrice = computed(() =>
      this.originalPrice() - (this.originalPrice() * this.discount() / 100)
  )

  increaseDiscount(){
    this.discount.update((value) => Math.min(value + 5, 50));
  }

  decreaseDiscount(){
    this.discount.update((value) => Math.max(value - 5,0))
  }

}
