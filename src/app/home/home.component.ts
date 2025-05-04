import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: false
})
export class HomeComponent implements OnInit {
  private readonly router = inject(Router);

  ngOnInit() {
  }

}
