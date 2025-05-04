import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit {

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('...N...', event)
      }
    })
  }

  onActivate(event: unknown) {
    console.log('Activate', event);
  }
}
