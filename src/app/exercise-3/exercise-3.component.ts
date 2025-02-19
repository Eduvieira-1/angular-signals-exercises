import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-exercise-3',
  imports: [CommonModule],
  templateUrl: './exercise-3.component.html',
  styleUrl: './exercise-3.component.scss',
})
export class Exercise3Component implements OnDestroy {
  private count$ = new BehaviorSubject<number>(0);
  private destroy$ = new Subject<void>();

  constructor(){
    const countObservable = toObservable(this.countSignal);

    countObservable
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => console.log('Valor no Observable: ', value));
  }

  countSignal = toSignal(this.count$.asObservable());

  increase() {
    this.count$.next(this.count$.value + 1);
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
