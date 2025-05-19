import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NavigationStart, Router, RouterOutlet} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    RouterOutlet
  ]
})
export class AppComponent implements OnInit {

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(event => {
      if (event instanceof NavigationStart) {
      }
    })
  }

  onActivate(event: unknown) {
    console.log('Activate', event);
  }
}
