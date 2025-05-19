import {Component} from '@angular/core';
import {PieService} from '../../services/pie.service';
import {AsyncPipe, NgFor, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
  imports: [MatButton, AsyncPipe, NgIf, NgFor]
})
export class DetailViewComponent {
  selectedPie$ = this.pieService.selectedPie$;

  constructor(private readonly pieService: PieService,) {
  }
}
