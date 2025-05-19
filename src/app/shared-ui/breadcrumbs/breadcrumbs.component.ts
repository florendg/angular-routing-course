import {Component} from '@angular/core';
import {PieService} from '../../services/pie.service';
import {MatButton} from "@angular/material/button";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
  imports: [AsyncPipe, NgIf, MatButton]
})
export class BreadcrumbsComponent {
  selectedCategory$ = this.pieService.selectedCategory$;
  selectedPie$ = this.pieService.selectedPie$;

  constructor(private readonly pieService: PieService) {
  }
}
