import { CommonModule } from '@angular/common';
import { Component, signal, computed, WritableSignal, Signal } from '@angular/core';

@Component({
  selector: 'app-example',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {

  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2)

  increase(){
    this.count.set(this.count() + 1)
  }

  decrease(){
    this.count.set(this.count() - 1);
  }









}
