import {Component} from '@angular/core';
import {Category} from '../models/pie';
import {PieService} from '../services/pie.service';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    MatMenu, MatMenuItem, MatButton, MatMenuTrigger
  ]

})
export class HeaderComponent {
  readonly Category = Category;

  constructor(
    private readonly pieService: PieService
  ) {
  }

  changeCategory(category: Category) {
    this.pieService.setSelectedCategory(category);
  }

}
