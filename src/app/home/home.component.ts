import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SubSectionComponent} from "./sub-section/sub-section.component";
import {HeroSectionComponent} from "./hero-section/hero-section.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [SubSectionComponent, HeroSectionComponent]
})
export class HomeComponent implements OnInit {
  private readonly router = inject(Router);

  ngOnInit() {
  }

}
